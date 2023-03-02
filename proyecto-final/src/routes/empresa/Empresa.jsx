import React from "react";
import { Link } from "react-router-dom";
import "./empresa.css";

function Empresa() {
  return (
    <div className="empresa">
      <section className="header-empresa">
        <div className="logoHS">
          <img src="./img/logoHSverde.png" alt="logoHS" />
        </div>
        <h2> EMPRESA</h2>
      </section>

      <Link to="/home" className="empresa-atras">
        <button>Atras</button>
      </Link>

      <section className="body-empresa">
        <div className="nosotros">
          <h3>NOSOTROS</h3>
          <div className="fotos-nosotros">
            <div>
              <img src="" alt="CEO German" />
            </div>
            <div>
              <img src="" alt="CEO Shindey" />
            </div>
            <div>
              <img src="" alt="CEO Bruno" />
            </div>
          </div>
          <article className="nosotros-descripcion">
            <p>
              Contamos con un equipo de profesionales calificados, en Montevideo
              y Punta del Este, con el compromiso de ayudar a nuestros clientes
              a concretar la mejor inversión en sus operaciones inmobiliarias,
              porque conocemos la importancia de elegir dónde vivir, una de las
              principales decisiones de la vida.
            </p>
          </article>
        </div>

        <div className="empres-funciones"></div>
      </section>
    </div>
  );
}

export default Empresa;
