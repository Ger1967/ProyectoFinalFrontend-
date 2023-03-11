import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Empresa from "./routes/empresa/Empresa";
import Servicios from "./routes/servicios/Servicios";
import Contacto from "./routes/contacto/Contacto";
import Administrar from "./routes/administrar/Administrar";
import ErrorPage from "./routes/error-page/ErrorPage";
import App from "./App";
import Detalles from "./routes/detalles/Detalles";
import Home from "../src/routes/homeService/Home";
import ModalCrear from "./routes/modalCrear/ModalCrear";
import Register from "./components/Login/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
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
  {
    path: "/register",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
