import React from "react";
import { Link } from "react-router-dom";
import "./administrar.css";

function Administrar() {
  return (
    <div>
      Administrar
      <Link to="/">
        <button>Atras</button>
      </Link>
    </div>
  );
}

export default Administrar;
