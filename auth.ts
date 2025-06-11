import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: 'Admin Login',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const username = credentials?.username;
        const password: any = credentials?.password;
        console.log(password, 'password from credentials');
        if (!username || !password) {
          console.error(
            'Both Username and password are required',
            'username: ' + username,
            'password: ' + password,
          );
          throw new Error('Username and password are required');
        }

        const isValidUser = username === process.env.ADMIN_USERNAME;
        const hash = Buffer.from(process.env.ADMIN_HASH_B64 || '', 'base64').toString('utf8');
        const isValidPassword = await bcrypt.compare(password, hash);

        if (isValidUser && isValidPassword) {
          return {
            id: '1',
            username,
            role: 'admin',
          } as any;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = 'admin';
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allow relative callback URLs
      if (url.startsWith('/')) return new URL(url, baseUrl).toString();
      // Otherwise, redirect to the base URL
      return baseUrl;
    },
  },
  secret: process.env.AUTH_SECRET,
});
