import NextAuth from 'next-auth';
import { authOptions } from '@/features/api/auth/authConfig';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
