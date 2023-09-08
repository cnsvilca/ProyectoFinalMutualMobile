const IP_PC = `192.168.0.115`
const ENDPOINT = `http://${IP_PC}:3000/api/cuotas/afiliado/`

export const getCuotaByAfiliadoId = async (id_afiliado) => {
    try {
      const response = await fetch(`${ENDPOINT}${id_afiliado}`);
      return response.json();
    } catch {
      throw new Error('could not fetch Cuotas');
    }
  };