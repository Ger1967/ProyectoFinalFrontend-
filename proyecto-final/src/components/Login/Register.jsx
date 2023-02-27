import React, { useState } from "react";
import { registro } from "../../api/Rule_inmuebles";
import { useForm } from "react-hook-form";
// import { useLocation } from "react-router-dom";

function Register() {
  const [registrarUsuario, setRegistrarUsuario] = useState({});

  // const location = useLocation();
  // const { id } = location.state;

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
    <form action="" onSubmit={handleSubmit(onSubmit)}>
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
  );
}

export default Register;
