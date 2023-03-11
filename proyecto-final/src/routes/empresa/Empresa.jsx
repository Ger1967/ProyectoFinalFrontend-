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
            <div className="ceos">
              <div className="foto-ceo german">
                {/* <img src="" alt="CEO German" /> */}
              </div>
              <h4>German Alfaro</h4>
              <p>Home Service CEO</p>
            </div>

            <div className="ceos">
              <div className="foto-ceo shindey"></div>
              <h4>Shindey Madrid</h4>
              <p>Home Service CEO</p>
            </div>

            <div className="ceos">
              <div className="foto-ceo bruno"></div>
              <h4>Bruno Benvenuto</h4>
              <p>Home Service CEO</p>
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
      </section>
    </div>
  );
}

export default Empresa;
