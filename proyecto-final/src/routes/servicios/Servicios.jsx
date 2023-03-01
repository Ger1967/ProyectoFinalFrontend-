import React from "react";
import { Link } from "react-router-dom";
import "./servicios.css";

function Servicios() {
  return (
    <div>
      Servicios
      <Link to="/home">
        <button>Atras</button>
      </Link>
    </div>
  );
}

export default Servicios;
