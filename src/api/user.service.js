const IP_PC = `192.168.0.115`
const ENDPOINT = `http://${IP_PC}:3000/api/users`


export const signin = async (data) =>{
  try {
    const response = await fetch(`${ENDPOINT}/signin`,{
      method:"POST",
      body: JSON.stringify(data),
      headers:{"Content-type": "application/json; charset=UTF-8"}
    })
    return response.json();
  } catch {
    throw new Error('could not login')
  }
}

export const getUsers = async () => {
  try {
    const response = await fetch(ENDPOINT)
    return response.json()
  } catch {
    throw new Error('could not fetch users')
  }
}
