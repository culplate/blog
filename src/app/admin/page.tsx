'use client';

import { signOut } from 'next-auth/react';

export default function AdminPage() {
  return (
    <div className="max-w-sm mx-auto mt-24">
      <div>ADMIN PAGE</div>
      <button onClick={() => signOut({ callbackUrl: '/login' })}>Log out</button>
    </div>
  );
}
