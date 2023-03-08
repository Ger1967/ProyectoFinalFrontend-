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
    <div className="login-container">
      {" "}
      <form onSubmit={handleSubmit(onSubmit)} className="contenedor">
        <div className="formulario">
          <div className="derecha">
            <label>
              Email
              <input type="text" {...register("email")} placeholder="Email" />
            </label>
            <label>
              Password
              <input
                type="password"
                {...register("password")}
                placeholder="Contrase単a"
              />
            </label>
            <button type="submit">Ingresar</button>
          </div>
          <div className="izquierda">
            <h1 className="titulo"> Bienvenido </h1>
            <hr />
            <a href="#"> 多Olvidaste tu contrase単a?</a>
            <Link to="/register"> 多No tienes una cuenta? Registrate </Link>
            <hr />
          </div>
        </div>
      </form>
    </div>
  );
}
export default Login;
