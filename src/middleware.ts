import { auth } from '../auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  const isLoginPage = req.nextUrl.pathname === '/login';
  if (!req.auth && !isLoginPage) {
    const loginUrl = new URL('/login', req.nextUrl.origin);
    return Response.redirect(loginUrl);
  }

  if (req.auth && isLoginPage) {
    const adminUrl = new URL('/admin', req.nextUrl.origin);
    return Response.redirect(adminUrl);
  }
  return NextResponse.next();
});

// Match only /admin and /login
export const config = {
  matcher: ['/admin:path*', '/login'],
};
