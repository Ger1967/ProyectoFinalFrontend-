import React from "react";
import { Link } from "react-router-dom";
import "./detalles.css";

function Detalles() {
  return (
    <div>
      Detalles
      <Link to="/">
        <button>Atras</button>
      </Link>
    </div>
  );
}

export default Detalles;
