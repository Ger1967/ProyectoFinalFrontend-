import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPublicacionById } from "../../api/Rule_inmuebles";
import "./detalles.css";

function Detalles() {
  const { idInmueble } = useParams();

  const [arrayPublicacion, setArrayPublicacion] = useState([]);

  const getPublicacion = async (id) => {
    await getPublicacionById(id).then((response) => {
      setArrayPublicacion(response);
    });
  };

  useEffect(() => {
    getPublicacion(idInmueble);
  }, []);

  return (
    <div className="detalles">
      <Link to="/" className="detalles-btn">
        <button>Atrás</button>
      </Link>
      <div className="seccion-detalles">
        <div className="detalles-img">
          <img src={arrayPublicacion[0]?.foto} alt="foto" />
        </div>
        <section className="detalles-body">
          <h2>Detalles de la propiedad</h2>
          <p>Tipo de propiedad: {arrayPublicacion[0]?.inmueble}</p>
          <p>
            {arrayPublicacion[0]?.operacion}: ${arrayPublicacion[0]?.precio}
          </p>
          <p>Dormitorios: {arrayPublicacion[0]?.dormitorios}</p>
          <p>Baños: {arrayPublicacion[0]?.baños}</p>
          <p>Área del terreno: {arrayPublicacion[0]?.metraje_terreno}</p>
          <p>Área edificada: {arrayPublicacion[0]?.metraje_edificado}</p>
          <p>
            Dirección: {arrayPublicacion[0]?.direccion},
            {arrayPublicacion[0]?.barrio}, {arrayPublicacion[0]?.departamento}
          </p>
        </section>
        <div className="contacto">
          <h2>Contacto</h2>
        </div>
        <section className="descripcion">
          <h2>Descripcion</h2>
          <p>{arrayPublicacion[0]?.descripcion}</p>
        </section>
        <div className="ubicacion">
          <h2>Ubicacion</h2>
        </div>
      </div>
    </div>
  );
}

export default Detalles;
