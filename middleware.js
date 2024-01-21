import { NextResponse } from 'next/server'

import { jwtVerify, importJWK } from "jose"
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  try {
    const token = request.cookies.get('token').value // ບັນທັດນີ້ແມ້ນການຮັບໂຕແປ່ລຂອງຄູກກີ້  ໂດຍ ອ່ານ Token ທີ່ຮັບມາຈາກ file action ຫຼັງຈາກຂຽນບັນທັດນີ້ແລ້ວເຮົາໄປກຳນົດ path in elamant config matcher
    const secretKey = await importJWK(secretJWK, 'HS256')
    const { payload } = await jwtVerify(token.value, secretKey)
    console.log(token)

    return NextResponse.next()
  } catch (error) {
      return NextResponse.redirect(new URL('/', request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/manage/user/:path*',
}