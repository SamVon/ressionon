import Link from 'next/link'
 
async function getTest(){
  const response = await fetch('https://6594fef604335332df81c57a.mockapi.io/test/User')

  if (!response.ok) {
    throw new Error('connot fetch User')
  }

  return response.json()
}

  export default async function Page() {
    const User = await getTest()
    return (
      <div>
        User List : 
        {
          User.map((User, index) =>
            <div key={index}>
              {User.id} {User.name}
              <Link href={`/User/${User.id}`}>
                Go to read User
              </Link>
            </div>
          )
        }
      </div>
    )
}
