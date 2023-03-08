import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="logoHS">
        <img src="./img/logoHSverde.png" alt="logoHS" />
      </div>
      <div className="menu">
        <ul className="menu-items">
          <Link to="/">
            <li>Inicio</li>
          </Link>
          <Link to="/empresa">
            <li>Empresa</li>
          </Link>
          <Link to="/servicios">
            <li>Servicios</li>
          </Link>
          <Link to="/estudio">
            <li>Estudio</li>
          </Link>
          <Link to="/contacto">
            <li>Contacto</li>
          </Link>
          <Link to="/administrar">
            <li>Administrar</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
