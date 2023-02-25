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
          <p>Área del terreno: {arrayPublicacion[0]?.metraje_terreno} m2</p>
          <p>Área edificada: {arrayPublicacion[0]?.metraje_edificado} m2</p>
          <div className="direccion">
            <img
              src="../img/ubicacion.png"
              alt="icono"
              className="icono-direccion"
            />
            <p>
              {arrayPublicacion[0]?.direccion}, {arrayPublicacion[0]?.barrio},{" "}
              {arrayPublicacion[0]?.departamento}
            </p>
          </div>
        </section>

        <div className="contacto">
          <h2>Consultá por esta propiedad:</h2>

          <form
            action="https://formsubmit.co/shindeymadrid@gmail.com"
            method="POST"
          >
            <div className="nombre-email">
              <div className="nombre-apellido">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                  title="Nombre solo acepta letras y espacios en blanco"
                  required
                />
              </div>

              <div className="email">
                <input
                  type="email"
                  name="correo"
                  placeholder="Email"
                  pattern="^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$"
                  title="Formato de correo invalido"
                  required
                />
              </div>
            </div>
            <div className="solicitud">
              <textarea
                name="comentarios"
                cols="30"
                rows="5"
                placeholder="Ingrese aqui su consulta"
                required
              ></textarea>
            </div>
            <br />
            <button type="submit" className="enviar">
              Enviar
            </button>
          </form>
        </div>

        <section className="descripcion">
          <h2>Descripcion</h2>
          <p>{arrayPublicacion[0]?.descripcion}</p>
        </section>

        <div className="ubicacion">
          <h2>Ubicacion</h2>
          <iframe
            src={arrayPublicacion[0]?.mapa}
            width="600"
            height="450"
            title="ubicacion"
            allowfFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Detalles;
