// import { signOut } from 'next-auth/react';

// import { signOut } from '../../../auth';

import { signOut } from '../../../auth';

export default async function AdminPage() {
  return (
    <div className="max-w-sm mx-auto mt-24">
      <div>ADMIN PAGE</div>
      <form
        action={async () => {
          'use server';
          await signOut({ redirectTo: '/login' });
        }}
      >
        <button type="submit">Log out</button>
      </form>
    </div>
  );
}
