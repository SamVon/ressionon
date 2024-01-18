'use client'

import { useState, useEffect } from 'react'

async function getTest() {
    const response = await fetch('https://6594fef604335332df81c57a.mockapi.io/test/User')

    if (!response.ok) {
        throw new Error('connot fetch User')
    }

    return response.json()
}

export default function page() {

    const [userState, setUserState] = useState([])

    const intiUser = async () => {
        try {
            const result = await getTest()
            setUserState(result)
        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        intiUser()
        console.log(useEffect)
    }, [])

    return (

        <div>
            Test Page 2
            {
                userState.map((User, index) =>
                    <div key={index}>
                        {User.id} {User.name}
                    </div>
                )
            }

        </div>
    )
}