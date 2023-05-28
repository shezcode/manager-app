const fetcher = async ({url, method, body, json = true}) => {
  const res = await fetch(url, {
    method, 
    ...(body && {body: JSON.stringify(body)}),
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    }
  })

  if (!res.ok) {
    //handle errors
    throw new Error('API error!')
  }

  if (json) {
    const data = await res.json()
    return data.data
  }
}
