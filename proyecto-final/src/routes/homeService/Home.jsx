import React, { useEffect, useState } from "react";
import { inmuebles } from "../../api/Rule_inmuebles";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";
import "./home.css";
import Buscador from "../../components/buscador/Buscador";

function Home() {
  const [mostrarInmuebles, setMostrarInmuebles] = useState([]);

  const getInmuebles = async () => {
    await inmuebles().then((response) => {
      setMostrarInmuebles(response);
    });
  };
  useEffect(() => {
    getInmuebles();
  }, []);

  return (
    <div className="home">
      <Header />
      <Buscador />
      <Main mostrarInmuebles={mostrarInmuebles} />
      <Footer />
    </div>
  );
}

export default Home;
