'use client';

import s from './LoginForm.module.scss';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { login } from '../login';

export function LoginForm() {
  const router = useRouter();

  const [error, setError] = useState<string | null>('');
  const [pending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    setError('');
    toast.loading('Logging in...');

    startTransition(async () => {
      const result = await login(formData);
      toast.dismiss();
      if (result?.error) {
        toast.error(result.error);
        setError(result.error);
      } else {
        toast.success('Login successful!');
        router.push('/admin');
      }
    });
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
