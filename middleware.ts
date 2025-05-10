import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    const isAuth = request.cookies.get('auth')?.value === '1'

    // Jeśli próbujesz wejść na /private bez zalogowania → redirect
    if (!isAuth && request.nextUrl.pathname.startsWith('/witkoria')) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}