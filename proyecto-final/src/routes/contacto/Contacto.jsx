import React from "react";
import { Link } from "react-router-dom";
import "./contacto.css";

function Contacto() {
  return (
    <div>
      Contacto
      <Link to="/home">
        <button>Atras</button>
      </Link>
    </div>
  );
}

export default Contacto;
