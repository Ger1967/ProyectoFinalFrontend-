import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./administrar.css";
import Modal_crear from "../modalCrear/Modal_crear";

function Administrar() {
  const [openModal, setOpenModal] = useState(false);

  const modalHandler = () => {
    setOpenModal(!openModal);
  };

  return (
    <div>
      <h2>Administrar</h2>

      <Link to="/">
        <button>Atras</button>
      </Link>
      <ul>
        <li>
          {openModal === true ? <Modal_crear /> : null}
          <button onClick={modalHandler}>Crear una nueva publicacion</button>
        </li>

        <li>Borrar una publicacion</li>
        <li>Modificar publicacion existente</li>
        <li>Ver todas las publicaciones</li>
      </ul>
    </div>
  );
}

export default Administrar;
