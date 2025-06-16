'use server';

import { credentialsSchema } from '@/lib/validations/auth';
import { signIn } from '../../../auth';

export async function login(formData: { username: string; password: string }) {
  // validation goes here
  const { data, error } = credentialsSchema.safeParse(formData);

  if (data === undefined || error) {
    console.error('Validation error at login.ts:', error);
    return { error: 'Incorrect username or password' };
  }

  try {
    const result = await signIn('credentials', {
      redirect: false,
      username: data.username,
      password: data.password,
    });

    if (result?.error) {
      throw new Error('Invalid username or password');
    }

    return { success: true };
  } catch (err: unknown) {
    if (
      err &&
      typeof err === 'object' &&
      'digest' in err &&
      typeof err.digest === 'string' &&
      err.digest.startsWith('NEXT_REDIRECT')
    ) {
      throw err; // rethrow for redirect to work!
    }

    if (
      err &&
      typeof err === 'object' &&
      'type' in err &&
      typeof err.type === 'string' &&
      err.type?.includes('CredentialsSignin')
    ) {
      console.error('CredentialsSignin error:', err);
      return { error: 'Invalid username or password' };
    }

    console.error('Unexpected login error:', err);
    return { error: 'An unexpected error occurred during login' };
  }
}
