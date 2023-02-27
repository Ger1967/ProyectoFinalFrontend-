import React, { useState } from "react";
import "./login.css";
import { login } from "../../api/Rule_inmuebles";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({});
  let navigate = useNavigate();

  const onSubmit = async (e) => {
    const email = e.target.Email.value;
    const password = e.target.Password.value;
    await login(email, password)
      .then((response) => {
        setData(response);
        navigate(`home`);
      })
      // if (usuario !== data.name && password !== data.password) {
      //   alert("Error");
      // }
      .catch((error) => {
        alert(error);
        throw error.response.data.error || "Error procesando la solicitud";
      });
  };

  return (
    <div className="contenedor">
      <div className="titulo">
        <h1> Bienvenido </h1>
      </div>
      <form className="formulario" onSubmit={onSubmit}>
        <div>
          <label htmlFor="usuario">Usuario: </label>
          <input
            type="email"
            required
            placeholder="Complete con su e-mail"
            name="Email"
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña: </label>
          <input
            type="password"
            required
            placeholder="Contraseña"
            name="Password"
          />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
