import React, { useState } from "react";
import { registro } from "../../api/Rule_inmuebles";
import { useForm } from "react-hook-form";
import "./register.css";

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
      <section>
        <div className="register-logo">
          <img src="./img/logoHSverde.png" alt="logo HS" />
        </div>
        <p>HOME SERVICE</p>
      </section>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="form-register"
      >
        <label>
          Nombre:
          <input type="text" name="nombre" {...register("nombre")} />
        </label>
        <label>
          Correo electrónico:
          <input type="email" name="email" {...register("email")} />
        </label>
        <label>
          Contraseña:
          <input type="password" name="password" {...register("password")} />
        </label>
        <label>
          Confirmar contraseña:
          <input type="password" name="confirmPassword" />
        </label>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
