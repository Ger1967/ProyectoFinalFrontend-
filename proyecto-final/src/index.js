import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Login from "./components/Login/Login";
import Empresa from "./routes/empresa/Empresa";
import Servicios from "./routes/servicios/Servicios";
import Contacto from "./routes/contacto/Contacto";
import Administrar from "./routes/administrar/Administrar";
import ErrorPage from "./routes/error-page/ErrorPage";
import App from "./App";
import Detalles from "./routes/detalles/Detalles";
<<<<<<< HEAD
import Home from "./routes/homeService/Home";
=======
import Home from "../src/routes/homeService/Home";
import ModalCrear from "./routes/modalCrear/ModalCrear";
>>>>>>> 4a51fee8ac7c250d0b24f9c511e2e5eef85717ff

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/empresa",
    element: <Empresa />,
  },
  {
    path: "/servicios",
    element: <Servicios />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
  {
    path: "/administrar",
    element: <Administrar />,
  },
  {
    path: "/modalcrear",
    element: <ModalCrear />,
  },
  {
    path: "/detalles/:idInmueble",
    element: <Detalles />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
