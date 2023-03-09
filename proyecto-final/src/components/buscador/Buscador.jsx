import React, { useState } from "react";
import "./buscador.css";
// import { obtenerDatos } from "../../api/Rule_inmuebles";
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

function Buscador(props) {
  const { register, handleSubmit } = useForm();

  return (
    <div className="container">

      <h1 className="tituloBuscador">
        Encuentra la Propiedad que estas Buscando
      </h1>
      <form className="filtro" onSubmit={handleSubmit(props.filtrar)}>
        <select name="Operacion" {...register("operacion")}>
          {operacion.map((operacion) => {
            return <option value={operacion.value}>{operacion.mostrar}</option>;
          })}
        </select>
        <select name="Tipo" {...register("propiedad")}>
          {propiedad.map((propiedad) => {
            return <option value={propiedad.value}>{propiedad.mostrar}</option>;
          })}
        </select>
        <select name="Domitorios" {...register("dormitorio")}>
          {dormitorios.map((dormitorios) => {
            return (
              <option value={dormitorios.value}>{dormitorios.mostrar}</option>
            );
          })}
        </select>
        <select name="Departamento" {...register("departamento")}>
          {departamentos.map((departamentos) => {
            return (
              <option value={departamentos.value}>
                {departamentos.mostrar}
              </option>
            );
          })}
        </select>
        <button type="submit"> Buscar </button>
      </form>
    </div>
  );
}

export default Buscador;
