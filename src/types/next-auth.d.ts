// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type NextAuth from 'next-auth';
declare module 'next-auth' {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string | null;
    };
  }

  interface User {
    role?: string;
  }

  interface JWT {
    role?: string;
  }
}

export {};
