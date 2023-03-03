import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src="./img/logoHSbeige.png" alt="logoHS" />
      </div>
      <div className="footer-direcciones">
        <section className="footer-detalles">
          <div className="footer-titulo">
            <h4>Casa Central</h4>
          </div>

          <div className="footer-items">
            <div className="footer-info">
              <div className="footer-icon">
                <img src="./img/iconCasita.png" alt="iconCasita" />
              </div>
              <p className="icon-info">San Jose 1180</p>
            </div>

            <div className="footer-info">
              <div className="footer-icon">
                <img src="./img/iconTelefono.png" alt="iconTelefono" />
              </div>
              <p className="icon-info">29032008</p>
            </div>

            <div className="footer-info">
              <div className="footer-icon">
                <img src="./img/iconEmail.png" alt="iconEmail" />
              </div>
              <p className="icon-info">homeservice@gmail.com</p>
            </div>

            <div className="footer-info">
              <div className="footer-icon">
                <img src="./img/iconReloj.png" alt="iconReloj" />
              </div>
              <p className="icon-info">
                Lun a Vie - 9:00 a 12:00 y 13:00 a 17:00 hs
              </p>
            </div>
          </div>
        </section>

        <section className="footer-detalles">
          <div className="footer-titulo">
            <h4>Pocitos</h4>
          </div>

          <div className="footer-items">
            <div className="footer-info">
              <div className="footer-icon">
                <img src="./img/iconCasita.png" alt="iconCasita" />
              </div>
              <p className="icon-info">Bv. España 2347 esq. Ellauri</p>
            </div>

            <div className="footer-info">
              <div className="footer-icon">
                <img src="./img/iconTelefono.png" alt="iconTelefono" />
              </div>
              <p className="icon-info">29037008</p>
            </div>

            <div className="footer-info">
              <div className="footer-icon">
                <img src="./img/iconEmail.png" alt="iconEmail" />
              </div>
              <p className="icon-info">homeservice@gmail.com</p>
            </div>

            <div className="footer-info">
              <div className="footer-icon">
                <img src="./img/iconReloj.png" alt="iconReloj" />
              </div>
              <p className="icon-info">Lun a Vie - 10:00 a 18:00 hs</p>
            </div>
          </div>
        </section>

        <section className="footer-detalles">
          <div className="footer-titulo">
            <h4>Punta del Este</h4>
          </div>

          <div className="footer-items">
            <div className="footer-info">
              <div className="footer-icon">
                <img src="./img/iconCasita.png" alt="iconCasita" />
              </div>
              <p className="icon-info">Calle 22 esq. calle 25 - Torre Amalfi</p>
            </div>

            <div className="footer-info">
              <div className="footer-icon">
                <img src="./img/iconTelefono.png" alt="iconTelefono" />
              </div>
              <p className="icon-info">29037248</p>
            </div>

            <div className="footer-info">
              <div className="footer-icon">
                <img src="./img/iconEmail.png" alt="iconEmail" />
              </div>
              <p className="icon-info">homeservice@gmail.com</p>
            </div>

            <div className="footer-info">
              <div className="footer-icon">
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
  );
}

export default Footer;
