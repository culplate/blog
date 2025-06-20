import NextAuth from 'next-auth';
import type { User, Session } from 'next-auth';
import type { JWT } from 'next-auth/jwt';

import { AuthConfig } from './auth.config';

interface AdminUser extends User {
  id: string;
  username: string;
  role: string;
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...AuthConfig,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.role = (user as AdminUser).role;
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user && token.role) {
        (session.user as AdminUser).role = token.role as string;
      }
      return session;
    },
    async authorized({ auth }) {
      return !!auth?.user;
    },
  },
  secret: process.env.AUTH_SECRET,

  pages: { signIn: '/login' }, // Redirect to this route for sign-in if not authenticated
});
