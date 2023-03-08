import React, { useEffect, useState } from "react";
import { inmuebles } from "../../api/Rule_inmuebles";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";
import "./home.css";
import Buscador from "../../components/buscador/Buscador";
import { obtenerDatos } from "../../api/Rule_inmuebles";

function Home() {
  // PARA MOSTRAR LOS INMUEBLES FILTRADOS

  const [inmueblesFiltrados, setInmueblesFiltrados] = useState([]);

  const onSubmit = async (data) => {
    await obtenerDatos(data)
      .then((response) => {
        setInmueblesFiltrados(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  // PARA MOSTRAR TODOS LOS INMUEBLES EN LA BD

  const getInmuebles = async () => {
    await inmuebles().then((response) => {
      setInmueblesFiltrados(response);
    });
  };

  useEffect(() => {
    getInmuebles();
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
