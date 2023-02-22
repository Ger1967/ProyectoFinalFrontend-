import API from "./rule_api";

export const registro = async () => {
  let url = "/api/formulario/register";
  return await API.post(url)
    .then((response) => {
      return responde.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error al registrar";
    });
};
