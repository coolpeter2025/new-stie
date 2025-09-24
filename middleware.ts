import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Skip if already has locale or is an API/asset route
  if (pathname.startsWith('/en') || 
      pathname.startsWith('/es') || 
      pathname.startsWith('/api') || 
      pathname.startsWith('/_next') ||
      pathname.includes('.')) {
    return NextResponse.next();
  }

  // Redirect root and other paths to /en
  return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images/).*)',
  ],
};
