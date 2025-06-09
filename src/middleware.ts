import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  const isAdminRoute = req.nextUrl.pathname.startsWith('/admin');
  if (isAdminRoute && token?.role !== 'admin') {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

// 👇 Tell Next.js which routes to apply this middleware to
export const config = {
  matcher: ['/admin/:path*'], // applies to /admin and subpages
};
