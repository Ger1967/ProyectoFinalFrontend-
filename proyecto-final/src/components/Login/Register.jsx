import React, { useState } from "react";
import { registro } from "../../api/Rule_inmuebles";
import { useForm } from "react-hook-form";
import "./register.css";
import { Link } from "react-router-dom";

function Register() {
  const [registrarUsuario, setRegistrarUsuario] = useState({});

  const nuevoRegistro = async (usuarios) => {
    await registro(usuarios).then((response) => {
      setRegistrarUsuario(response);
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (usuarios) => {
    await registro(usuarios.nombre, usuarios.email, usuarios.password)
      .then((response) => {
        alert("Registro completado");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="register-container">
      <Link to="/" className="btn-register">
        <button className="atras-register">Atras</button>
      </Link>
      <section className="register-titulo">
        <div className="register-logo">
          <img src="./img/logoHSverde.png" alt="logo HS" />
        </div>
        <h2>HOME SERVICE</h2>
      </section>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="form-register"
      >
        <div className="register-nombre">
          <input
            type="text"
            name="nombre"
            {...register("nombre")}
            placeholder="Nombre"
          />
          <input
            type="email"
            name="email"
            {...register("email")}
            placeholder="E-mail"
          />
        </div>
        <div className="register-password">
          <input
            type="password"
            name="password"
            {...register("password")}
            placeholder="
          Contraseña"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar contraseña"
          />
        </div>

        <button type="submit" className="submit-register">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Register;
