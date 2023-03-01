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
    <div className="admin-fondo">
      <Link to="/home" className="btn-container">
        <button className="atras-admin">Atras</button>
      </Link>
      <h2 className="admin-titulo">Administrar Publicaciones</h2>
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

          <li className="menu-opciones">Borrar una publicacion</li>
          <li className="menu-opciones">Modificar publicacion existente</li>
          <li className="menu-opciones">Ver todas las publicaciones</li>
        </ul>
      </div>
    </div>
  );
}

export default Administrar;
