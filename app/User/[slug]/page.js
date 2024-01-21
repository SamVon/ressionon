
async function getUsers(slug) {
    const response = await fetch(`https://6594fef604335332df81c57a.mockapi.io/test/User/${slug}`)

    if (!response.ok) {
        throw new Error('connot fetch user')
    }

    return response.json()
}

export default async function Page({ params }){
    const User = await getUsers(params.slug)
    return(
        <div>
            ID: { params.slug }
            <div>
                User Name: {User.name}
            </div>
            <div>
                User description: {User.description}
            </div>
        </div>
    )
}