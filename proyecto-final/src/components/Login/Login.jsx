import { log } from "../../api/Rule_inmuebles";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./login.css";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      const response = await log(email, password);
      console.log(response);
      if (email === data.email && password === data.password) {
        navigate(`home`);
      }
    } catch (error) {
      console.log(error);
      alert("Error procesando la solicitud");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contenedor">
      <div className="formulario-izquierda">
        <label>
          Email:
          <input type="text" {...register("email")} />
        </label>
        <label>
          Password:
          <input type="password" {...register("password")} />
        </label>
        <button type="submit">Log in</button>
      </div>
      <Link to="/register">
        <button type="submit">Registrarse</button>
      </Link>
    </form>
  );
}
export default Login;
