import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

/**
 * Next中间件能保证得到认证前不会开始渲染，这在一定程度上enhancing both the security and performance
 */
export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'], // specify that it should run on specific paths.
};
