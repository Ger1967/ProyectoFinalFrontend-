import React, { useEffect, useState } from "react";
import { inmuebles } from "../../api/Rule_inmuebles";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";
import "./home.css";
import Buscador from "../../components/buscador/Buscador";
import { obtenerDatos } from "../../api/Rule_inmuebles";

function Home() {
  const [mostrarInmuebles, setMostrarInmuebles] = useState([]);

  // const [flag, setFlag] = useState(false);

  // EXPERIMENTO PARA MOSTRAR LOS INMUEBLES FILTRADOS

  const [inmueblesFiltrados, setInmueblesFiltrados] = useState([]);

  const onSubmit = async (data) => {
    await obtenerDatos(data)
      .then((response) => {
        console.log(response);
        setInmueblesFiltrados(response);
        // setFlag(!flag);
      })
      .catch((error) => {
        alert(error);
      });
  };

  // -----------------

  const getInmuebles = async () => {
    await inmuebles().then((response) => {
      setMostrarInmuebles(response);
    });
  };

  useEffect(() => {
    getInmuebles();
    // setInmueblesFiltrados(response);
  }, []);

  return (
    <div className="home">
      <Header />
      <Buscador filtrar={onSubmit} />
      <Main mostrarInmuebles={inmueblesFiltrados} />
      <Footer />
    </div>
  );
}

export default Home;
