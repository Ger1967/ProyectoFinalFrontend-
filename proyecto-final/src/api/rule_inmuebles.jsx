import API from "../api/Rule_api";

export const log = async (email, password) => {
  let url = "/api/formulario";
  return await API.post(url, { email, password })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};

export const registro = async (nombre, email, password) => {
  let url = "/api/formulario/register";
  return await API.post(url, { nombre, email, password })
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

// MOSTRAR DETALLES DE UNA PUBLICACION DETERMINADA (:id)

export const getPublicacionById = async (id) => {
  let url = "/api/inmuebles/" + id;
  return await API.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};

// REGISTRAR NUEVO INMUEBLE (MODAL CREAR)

export const postInmueble = async () => {
  let url = "/api/inmuebles/nuevoInmueble";
  return await API.post(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};

// FILTRADO DE INMUEBLES

export const obtenerDatos = async (data) => {
  let url = "/api/inmuebles/filtro/inmueblesFiltrados";
  return await API.post(url, {
    operacion: data?.operacion,
    inmueble: data?.propiedad,
    dormitorio: data?.dormitorio,
    departamento: data?.departamento,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};
