'use client';

// import s from './LoginForm.module.scss';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { login } from '../../../lib/auth/login';
import { credentialsSchema } from '@/lib/validations/auth';
import { z } from 'zod';

export function LoginForm() {
  const router = useRouter();

  const [error, setError] = useState<string | null>('');
  const [pending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    setError('');
    const toastId = toast.loading('Logging in...');

    try {
      const validated = credentialsSchema.parse({
        username: formData.get('username'),
        password: formData.get('password'),
      });
      startTransition(async () => {
        const result = await login(validated);

        if (result?.error) {
          toast.error(result.error, {
            id: toastId,
          });
          setError(result.error);
        } else {
          toast.success('Login successful!', {
            id: toastId,
          });
          router.push('/admin');
        }
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        console.log('Validation error in LoginForm:', err);
        setError(err.errors[0].message);
        toast.error(err.errors[0].message, {
          id: toastId,
        });
        return;
      }
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-24">
      <form action={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-black text-white p-2 rounded">
          {pending ? 'Logging in...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}
