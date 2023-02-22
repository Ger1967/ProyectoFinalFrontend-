import API from "../api/Rule_api";

export const registro = async () => {
  let url = "/api/formulario/register";
  return await API.post(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error al registrar";
    });
};

// MOSTRAR LOS INMUEBLES DE LA BD (CARDS)

export const inmuebles = async () => {
  let url = "/api/inmuebles";
  return await API.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};
