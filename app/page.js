async function getTest(){
  const response = await fetch('https://6594fef604335332df81c57a.mockapi.io/test/User')

  if (!response.ok) {
    throw new Error('connot fetch User')
  }

  return response.json()
}
export default async function Home() {

  const User = await getTest()
  console.log('User', User)
  return (
    <>
    <div>
      <p> Hello SAM</p>
    </div>
    </>
  )
}
