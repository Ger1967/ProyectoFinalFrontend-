import React from "react";
import { Link } from "react-router-dom";
import "./errorPage.css";

function ErrorPage() {
  return (
    <div className="errorpage-container">
      <h2>¡Lo sentimos!</h2>
      <h1>404</h1>
      <p>No se pudo encontrar la página solicitada...</p>
      <Link to="/home">
        <button>Volver a Inicio</button>
      </Link>
    </div>
  );
}

export default ErrorPage;
