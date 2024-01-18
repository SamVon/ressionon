export async function GET(request, { params}) { /* if have default is maen can use one GET or Post*/
  console.log('test')
  return Response.json({ 
    name: 'Samphathai',
    id: params.id
   })
}