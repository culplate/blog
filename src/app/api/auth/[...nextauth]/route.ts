import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

const handler = NextAuth({
  providers: [
    Credentials({
      name: 'Admin Login',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const username = credentials?.username;
        const password = credentials?.password;

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
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
