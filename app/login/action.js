'use server'

import { SignJWT, importJWK } from "jose"

import { cookies } from 'next/headers'

// prevState ເປັນການ ຜູກ Server ກັບ Client
export async function login(prevState, formData) {

    const email = formData.get('email')
    const password = formData.get('password')

    console.log('email', email)
    console.log('password', password)
    // สมมุติว่า check กับ database หรือ api
    if (email !== 'sam@test.com' && password !== '1234') {
        return { message : 'login Fail'}
    }
    // Login pass
    const secretJWK = { //ແມ່ນການຮັບ SecretAction
        kty: 'oct',
        k: process.env.JOSE_SECRET // Replace with your actual base64 encoded secret key
    }
    const secretKey = await importJWK(secretJWK, 'HS256')
    const token = await new SignJWT({ email }) //token =  ໃຊ້ສຳລັບກວດເຊັກການເຂົ້າລະຫັດຖືກຕ້ອງບໍ ແລະ ຍັງສາມາດເເກະຂໍ້ມູນ token ໄດ້
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1h') // Token expires in 1 hour
        .sign(secretKey)
    cookies().set('token', token)
    return { message: 'login success' }
}