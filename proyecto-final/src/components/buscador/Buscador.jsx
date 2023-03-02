import React, { useState } from "react";
import "./buscador.css";
import { obtenerDatos } from "../../api/Rule_inmuebles";
import { useForm } from "react-hook-form";

const operacion = [
  { value: "Tipo de Operacion", mostrar: "Tipo de Operación" },
  { value: "Alquiler", mostrar: "Alquiler" },
  { value: "Venta", mostrar: "Venta" },
  { value: "Venta o Alquiler", mostrar: "Venta o Alquiler" },
];

const propiedad = [
  { value: "Tipo de Propiedad", mostrar: "Tipo de Propiedad" },
  { value: "Apartamento", mostrar: "Apartamento" },
  { value: "Monoambiente", mostrar: "Monoambiente" },
  { value: "Casa", mostrar: "Casa" },
  { value: "Terreno", mostrar: "Terreno" },
  { value: "Local Comercial", mostrar: "Local Comercial" },
  { value: "Otro", mostrar: "Otro" },
];

const dormitorios = [
  { value: "Dormitorios", mostrar: "Dormitorios" },
  { value: "1", mostrar: "1" },
  { value: "2", mostrar: "2" },
  { value: "3", mostrar: "3 o más" },
];

const departamentos = [
  { value: "Departamento", mostrar: "Departamento" },
  { value: "Montevideo", mostrar: "Montevideo" },
  { value: "Canelones", mostrar: "Canelones" },
  { value: "Maldonado", mostrar: "Maldonado" },
  { value: "Rocha", mostrar: "Rocha" },
];

function Buscador() {
  const [inmueble, setInmueble] = useState([]);
  const { handleSubmit } = useForm();
  // const filtrarInmuebles = async (
  //   operacion,
  //   propiedad,
  //   dormitorio,
  //   departamento
  // ) => {
  //   await obtenerDatos()
  //     .then((response) => {
  //       setInmueble(response);
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
  // };

  const onSubmit = async ({
    operacion,
    propiedad,
    dormitorio,
    departamento,
  }) => {
    await obtenerDatos({ operacion, propiedad, dormitorio, departamento })
      .then((response) => {
        setInmueble(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="container">
      <h1>Encuentra la Propiedad que estas Buscando</h1>
      <form className="filtro" onSubmit={handleSubmit(onSubmit)}>
        <select name="Operacion">
          {operacion.map((operacion) => {
            return <option value={operacion.value}>{operacion.mostrar}</option>;
          })}
        </select>
        <select name="Tipo">
          {propiedad.map((propiedad) => {
            return <option value={propiedad.value}>{propiedad.mostrar}</option>;
          })}
        </select>
        <select name="Domitorios">
          {dormitorios.map((dormitorios) => {
            return (
              <option value={dormitorios.value}>{dormitorios.mostrar}</option>
            );
          })}
        </select>
        <select name="Departamento">
          {departamentos.map((departamentos) => {
            return (
              <option value={departamentos.value}>
                {departamentos.mostrar}
              </option>
            );
          })}
        </select>
        <button type="submit"> Boton </button>
      </form>
    </div>
  );
}

export default Buscador;
