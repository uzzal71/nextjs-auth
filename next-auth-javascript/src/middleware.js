import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

const { auth } = NextAuth(authConfig);

import { LOGIN, PROTECTED_SUB_ROUTES, PUBLIC_ROUTES, ROOT } from "@/lib/routes";

export async function middleware(request) {
  const { nextUrl } = request;
  const session = await auth();
  const isAuthenticated = !!session?.user;
  console.log(isAuthenticated, nextUrl.pathname);

  const isPublicRoute =
    (PUBLIC_ROUTES.find((route) => nextUrl.pathname.startsWith(route)) ||
      nextUrl.pathname === ROOT) &&
    !PROTECTED_SUB_ROUTES.find((route) => nextUrl.pathname.includes(route));

  console.log(isPublicRoute);

  if (!isAuthenticated && !isPublicRoute)
    return Response.redirect(new URL(LOGIN, nextUrl));
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
