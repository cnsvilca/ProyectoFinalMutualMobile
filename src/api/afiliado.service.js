const IP_PC = `192.168.0.115`
const ENDPOINT = `http://${IP_PC}:3000/api/afiliados`

export const getAfiliados = async () => {
    try {
      const response = await fetch(ENDPOINT)
      return response.json()
    } catch {
      throw new Error('could not fetch afiliados')
    }
  }
  