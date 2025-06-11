'use server';

import { signIn } from '../../../auth';

export async function login(formData: FormData) {
  // validation goes here
  const username = formData.get('username')?.toString().trim();
  const password = formData.get('password')?.toString();

  if (!username || !password) {
    return { error: 'Username and password are required' };
  }

  try {
    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      // This path is rarely hit because `CredentialsSignin` is thrown instead.
      throw new Error('Invalid username or password');
    }

    return { success: true };
  } catch (err: any) {
    if (
      err &&
      typeof err === 'object' &&
      'digest' in err &&
      typeof err.digest === 'string' &&
      err.digest.startsWith('NEXT_REDIRECT')
    ) {
      throw err; // rethrow for redirect to work!
    }

    if (err.type?.includes('CredentialsSignin')) {
      console.error('CredentialsSignin error:', err);
      return { error: 'Invalid username or password' };
    }

    console.error('Unexpected login error:', err);
    return { error: 'An unexpected error occurred during login' };
  }
}
