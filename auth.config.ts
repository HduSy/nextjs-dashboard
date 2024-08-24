import type { NextAuthConfig } from 'next-auth'; // Next.js Middleware

// auth 全局配置
export const authConfig = {
  //  the pages option to specify the route for custom sign-in, sign-out, and error pages
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // verify if the request is authorized to access a page via Next.js Middleware
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // list different login options, such as Google or GitHub or Credentials...
} satisfies NextAuthConfig;