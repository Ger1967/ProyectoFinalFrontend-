import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

function Main(props) {
  return (
    <>
      <div className="main">
        <div className="main-titulo">
          <h2>Propiedades Destacadas</h2>
        </div>
        <div className="main-body">
          {props.mostrarInmuebles.map((inmuebles) => {
            return (
              <>
                <div className="card">
                  <div className="card-foto">
                    <img src={inmuebles.foto} alt="foto" width="200" />
                  </div>

                  <article className="card-info">
                    <h5 className="operacion">{inmuebles.operacion}</h5>
                    <h4>{inmuebles.inmueble}</h4>

                    <div className="card-info-ubicacion">
                      <img
                        src="./img/ubicacion.png"
                        alt="ubicacion"
                        className="icon-ubicacion"
                      />
                      <p>
                        {inmuebles.barrio}, {inmuebles.departamento}
                      </p>
                    </div>

                    <h3>${inmuebles.precio}</h3>
                  </article>

                  <div className="card-btn">
                    <Link to={`/detalles/${inmuebles.id_inmuebles}`}>
                      <button>Ver detalles</button>
                    </Link>
                  </div>

                  <div className="card-footer">
                    <span className="card-icon-info">
                      <div className="card-icon">
                        <img src="./img/cama.png" alt="habitaciones" />
                      </div>
                      Habs.:{inmuebles.dormitorios}
                    </span>

                    <span className="card-icon-info">
                      <div className="card-icon">
                        <img src="./img/banera.png" alt="Baños" />
                      </div>
                      Baños:{inmuebles.baños}
                    </span>

                    <span className="card-icon-info">
                      <div className="card-icon">
                        <img src="./img/area.png" alt="Area" />
                      </div>
                      Area:{inmuebles.metraje_edificado}
                    </span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
