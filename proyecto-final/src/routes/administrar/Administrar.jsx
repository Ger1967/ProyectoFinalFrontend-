import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./administrar.css";
import ModalCrear from "../modalCrear/ModalCrear";

function Administrar() {
  const [openModal, setOpenModal] = useState(false);

  const modalHandler = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="admin">
      <div className="header-admin">
        <div className="logoHS">
          <img src="./img/logoHSverde.png" alt="logoHS" />
        </div>
        <h2>Administrar Publicaciones</h2>
      </div>
      <div className="admin-fondo">
        <Link to="/home" className="btn-container">
          <button className="atras-admin">Atras</button>
        </Link>

        <div className="admin-menu">
          <ul>
            <li className="menu-opciones">
              {openModal === true ? (
                <ModalCrear cerrarModal={modalHandler} />
              ) : null}
              <button className="btn-modal" onClick={modalHandler}>
                Crear una nueva publicacion
              </button>
            </li>

            <Link to="/borrar">
              <li className="menu-opciones">Borrar una publicacion</li>
            </Link>
            <Link to="/modificar">
              <li className="menu-opciones">Modificar publicacion existente</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Administrar;
