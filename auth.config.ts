import { credentialsSchema } from '@/lib/validations/auth';
import { NextAuthConfig, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

interface AdminUser extends User {
  id: string;
  username: string;
  role: string;
}

export const AuthConfig: NextAuthConfig = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<AdminUser | null> {
        try {
          const { username } = credentialsSchema.parse(credentials);

          if (username !== process.env.ADMIN_USERNAME) {
            return null;
          }

          const user = { id: 'admin', username, role: 'admin' };
          return user;
        } catch (error) {
          console.error('Authorization error:', error);
          return null;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
