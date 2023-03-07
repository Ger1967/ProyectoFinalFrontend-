import React from "react";
import { Link } from "react-router-dom";
import "./contacto.css";

function Contacto() {
  return (
    <div className="contacto-page">
      <section className="header-contacto">
        <div className="logoHS">
          <img src="./img/logoHSverde.png" alt="logoHS" />
        </div>
        <h2> CONTACTO</h2>
      </section>

      <Link to="/home" className="contacto-atras">
        <button>Atras</button>
      </Link>

      <div className="body-contacto">
        <section className="titulo-contacto">
          <h3>Contactanos</h3>
          <p>
            Si desea comunicarse con nosotros, puede hacerlo utilizando los
            siguientes teléfonos o e-mails o por medio de nuestro formulario de
            contacto.
          </p>
        </section>

        <section className="contacto-info">
          <div className="sucursales">
            <div className="oficinas">
              <div className="oficina-foto">
                <img src="./img/casaCentral.avif" alt="foto oficina central" />
              </div>

              <section className="oficina-detalles">
                <div className="oficina-titulo">
                  <h4>Casa Central</h4>
                </div>

                <div className="oficina-items">
                  <div className="oficina-info">
                    <div className="oficina-icon">
                      <img src="./img/iconCasita.png" alt="iconCasita" />
                    </div>
                    <p className="icon-info">San Jose 1180</p>
                  </div>

                  <div className="oficina-info">
                    <div className="oficina-icon">
                      <img src="./img/iconTelefono.png" alt="iconTelefono" />
                    </div>
                    <p className="icon-info">29032008</p>
                  </div>

                  <div className="oficina-info">
                    <div className="oficina-icon">
                      <img src="./img/iconEmail.png" alt="iconEmail" />
                    </div>
                    <p className="icon-info">homeservice@gmail.com</p>
                  </div>

                  <div className="oficina-info">
                    <div className="oficina-icon">
                      <img src="./img/iconReloj.png" alt="iconReloj" />
                    </div>
                    <p className="icon-info">
                      Lun a Vie - 9:00 a 12:00 y 13:00 a 17:00 hs
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <div className="oficinas">
              <div className="oficina-foto">
                <img src="./img/pocitos.jpg" alt="foto oficina Pocitos" />
              </div>

              <section className="oficina-detalles">
                <div className="oficina-titulo">
                  <h4>Pocitos</h4>
                </div>

                <div className="oficina-items">
                  <div className="oficina-info">
                    <div className="oficina-icon">
                      <img src="./img/iconCasita.png" alt="iconCasita" />
                    </div>
                    <p className="icon-info">Bv. España 2347 esq. Ellauri</p>
                  </div>

                  <div className="oficina-info">
                    <div className="oficina-icon">
                      <img src="./img/iconTelefono.png" alt="iconTelefono" />
                    </div>
                    <p className="icon-info">29037008</p>
                  </div>

                  <div className="oficina-info">
                    <div className="oficina-icon">
                      <img src="./img/iconEmail.png" alt="iconEmail" />
                    </div>
                    <p className="icon-info">homeservice@gmail.com</p>
                  </div>

                  <div className="oficina-info">
                    <div className="oficina-icon">
                      <img src="./img/iconReloj.png" alt="iconReloj" />
                    </div>
                    <p className="icon-info">Lun a Vie - 10:00 a 18:00 hs</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="oficinas">
              <div className="oficina-foto">
                <img src="./img/pde.webp" alt="foto oficina PDE" />
              </div>

              <section className="oficina-detalles">
                <div className="oficina-titulo">
                  <h4>Punta del Este</h4>
                </div>

                <div className="oficina-items">
                  <div className="oficina-info">
                    <div className="oficina-icon">
                      <img src="./img/iconCasita.png" alt="iconCasita" />
                    </div>
                    <p className="icon-info">
                      Calle 22 esq. calle 25 - Torre Amalfi
                    </p>
                  </div>

                  <div className="oficina-info">
                    <div className="oficina-icon">
                      <img src="./img/iconTelefono.png" alt="iconTelefono" />
                    </div>
                    <p className="icon-info">29037248</p>
                  </div>

                  <div className="oficina-info">
                    <div className="oficina-icon">
                      <img src="./img/iconEmail.png" alt="iconEmail" />
                    </div>
                    <p className="icon-info">homeservice@gmail.com</p>
                  </div>

                  <div className="oficina-info">
                    <div className="oficina-icon">
                      <img src="./img/iconReloj.png" alt="iconReloj" />
                    </div>
                    <p className="icon-info">
                      Mar a Sáb - 10:00 a 13:00 y 15:00 a 18:00 hs
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="contacto-form">
            <h3>Envianos tu consulta:</h3>
            <form
              action="https://formsubmit.co/shindeymadrid@gmail.com"
              method="POST"
            >
              <input
                type="text"
                name="nombre"
                pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                title="Nombre solo acepta letras y espacios en blanco"
                required
                placeholder="Nombre *"
              />
              <input
                type="email"
                name="correo"
                pattern="^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$"
                title="Formato de correo invalido"
                required
                placeholder="Email *"
              />
              <input type="number" placeholder="Teléfono / Celular *" />
              <textarea
                name="Consulta"
                id=""
                cols="30"
                rows="10"
                placeholder="Ingrese aqui su consulta"
              ></textarea>
              <button type="submit" className="enviar">
                Enviar consulta
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contacto;
