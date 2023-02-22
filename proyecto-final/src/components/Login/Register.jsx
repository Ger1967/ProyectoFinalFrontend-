import React, { useState } from "react";
import registro from "../../api/rule_inmuebles";
function Register() {
  const [registrarUsuario, setRegistrarUsuario] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;
  };

  if (password !== confirmPassword) {
    alert("las contraseñas no coinciden ");
  }

  const registrame = async () => {
    await registro().then((response) => {
      setRegistrarUsuario(response);
    });
  };

  return <div></div>;
}

export default Register;
