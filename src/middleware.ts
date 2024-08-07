import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware'
import { NextResponse } from 'next/server'

export default function middleware(req: NextResponse) {
  return withAuth()
}

export const config = {
  matcher: ["/create-post"],
}
