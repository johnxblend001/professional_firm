import { NextRequest, NextResponse } from "next/server";
import { firmsRegistry } from "@/config/firms";

export function middleware(req: NextRequest) {
  const hostname = req.headers.get("host") || "";
  const url = req.nextUrl;

  // Extract subdomain if running on custom domain (e.g., sylvester.youragency.com)
  const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || "";

  if (rootDomain && hostname.endsWith(`.${rootDomain}`)) {
    const subdomain = hostname.replace(`.${rootDomain}`, "").toLowerCase().trim();
    if (subdomain && subdomain !== "www" && firmsRegistry[subdomain]) {
      // Internally rewrite apex.youragency.com/ to /[subdomain]
      url.pathname = `/${subdomain}${url.pathname === "/" ? "" : url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
