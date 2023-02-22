import React from "react";
import { Link } from "react-router-dom";
import "./empresa.css";

function Empresa() {
  return (
    <div>
      Empresa
      <Link to="/">
        <button>Atras</button>
      </Link>
    </div>
  );
}

export default Empresa;
