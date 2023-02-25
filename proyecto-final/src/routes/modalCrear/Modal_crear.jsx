import React from "react";
import { Link } from "react-router-dom";
import "./modal_crear.css";

function Crear_pub() {
  return (
    <div className="modal-crear">
      <form className="formCrear"></form>
      <h2>Registrar nueva publicacion</h2>

      <section>
        <select name="Operacion">
          <option value="Tipo de Operacion" selected>
            Tipo de Operacion
          </option>
          <option value="Alquiler">Alquiler</option>
          <option value="Venta">Venta</option>
          <option value="Venta o Alquiler">Venta o Alquiler</option>
        </select>
      </section>

      <section></section>

      <section></section>

      <Link to="/administrar">
        <button>Atras</button>
      </Link>
    </div>
  );
}

export default Crear_pub;
