import React from "react";
import { Link } from "react-router-dom";
import "./servicios.css";

function Servicios() {
  return (
    <div className="servicios">
      <section className="header-servicios">
        <div className="logoHS">
          <img src="./img/logoHSverde.png" alt="logoHS" />
        </div>
        <h2>SERVICIOS</h2>
      </section>

      <Link to="/home" className="servicios-atras">
        <button>Atras</button>
      </Link>

      <section className="body-servicios">
        <article className="servicios-descripcion">
          <p>
            Una empresa reconocida en el mercado regional. Respaldados por una
            larga y sólida trayectoria ofrecemos negocios inmobiliarios con
            soluciones integradas, para lo que desarrollamos un equipo de
            profesionales altamente capacitados que nos permite ofrecer las
            mejores soluciones a sus necesidades, asesorando en transacciones
            inmobiliarias a individuos, instituciones y grupos inversores,
            nacionales y extranjeros.
          </p>
        </article>
        <hr />
        <section className="servicios-funciones">
          <div className="funciones-cards">
            <div className="funciones-icono">
              <img src="./img/tasacion.png" alt="icono" />
            </div>
            <div className="funciones-info">
              <h4>TASACION</h4>
              <p>
                Seleccionamos la metodología de tasación más adecuada según el
                inmueble a estudiar para determinar el valor comercial del
                mismo.
              </p>
            </div>
          </div>

          <div className="funciones-cards">
            <div className="funciones-icono">
              <img src="./img/acuerdo.png" alt="icono" />
            </div>
            <div className="funciones-info">
              <h4>COMPRA/VENTA</h4>
              <p>
                Brindamos soluciones integrales, aportamos nuestro compromiso
                profesional con un servicio diferencial para que compradores y
                vendedores logren su objetivo, concretar un buen negocio con
                seguridad.
              </p>
            </div>
          </div>

          <div className="funciones-cards">
            <div className="funciones-icono">
              <img src="./img/alquileres.png" alt="icono" />
            </div>
            <div className="funciones-info">
              <h4>ALQUILERES</h4>
              <p>
                Trabajamos para brindar soluciones acordes a las necesidades de
                los clientes.
              </p>
            </div>
          </div>

          <div className="funciones-cards">
            <div className="funciones-icono">
              <img src="./img/acciones.png" alt="icono" />
            </div>
            <div className="funciones-info">
              <h4>ACCIONES</h4>
              <p>
                Logramos la conexión perfecta entre propiedades y clientes.
                Invertimos tiempo, dinero y esfuerzo diseñando distintas
                estrategias de marketing.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Servicios;
