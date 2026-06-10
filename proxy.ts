import { type NextRequest, NextResponse } from "next/server";
import { getLegacyRedirectDestination } from "@/lib/legacy-redirects";

/**
 * Next.js 16 network boundary — legacy static .html paths only.
 * No auth, DB, or heavy logic here (per Next.js 16 proxy guidance).
 */
export function proxy(request: NextRequest) {
  const destination = getLegacyRedirectDestination(request.nextUrl.pathname);

  if (destination) {
    return NextResponse.redirect(new URL(destination, request.url), 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|assets|fonts|.*\\..*).*)",
  ],
};
