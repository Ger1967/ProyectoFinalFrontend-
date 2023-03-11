import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { postInmueble } from "../../api/Rule_inmuebles";
import "./modalCrear.css";

function ModalCrear(props) {
  const [nuevoInmueble, setNuevoInmueble] = useState({});
  const [file, setFile] = useState(null);

  const nuevaPublicacion = async (nuevaPub) => {
    await postInmueble(nuevaPub).then((response) => {
      setNuevoInmueble(response);
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await postInmueble(data)
      .then((response) => {
        alert("Se agrego la nueva publicacion exitosamente");
      })
      .catch((error) => {
        alert(error);
      });
  };

  // LOGICA PARA CARGAR LA FOTO

  const [image, setImage] = useState({});

  const fileOnChange = (event) => {
    console.log(event.target.files[0]);
  };


  const sendImage = (e) => {
    let formdata = new FormData();


    formdata.append("imagen", image);

    fetch("http://localhost:3002/foto", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.text())
      .then((resBody) => {
        console.log(resBody);
      });
  };

  return (
    <div className="fondoModal">
      <form className="formCrear" onSubmit={handleSubmit(onSubmit)}>
        <button className="btn-atras" onClick={props.cerrarModal}>
          Atras
        </button>
        <h2>Registrar nueva publicacion</h2>

        <div className="modal-secciones">
          <section className="modal-precio">
            <select
              name="Operacion"
              required
              {...register("operacion", require)}
            >
              <option
                value="Tipo de Operacion"
                defaultValue={"Tipo de Operacion"}
              >
                Tipo de Operacion
              </option>
              <option value="Alquiler">Alquiler</option>
              <option value="Venta">Venta</option>
              <option value="Venta o Alquiler">Venta o Alquiler</option>
            </select>
            <input
              type="number"
              placeholder="Precio"
              step="1"
              min="0"
              required
              {...register("precio")}
            />
          </section>

          <section className="modal-detalles">
            <select name="Tipo" required {...register("inmueble")}>
              <option
                value="Tipo de propiedad"
                defaultValue={"Tipo de propiedad"}
              >
                Tipo de Propiedad
              </option>
              <option value="Apartamento">Apartamento</option>
              <option value="Monoambiente">Monoambiente</option>
              <option value="Casa">Casa</option>
              <option value="Terreno">Terreno</option>
              <option value="Local Comercial">Local Comercial</option>
              <option value="Otro">Otro</option>
            </select>
            <input
              type="number"
              placeholder="Dormitorios"
              step="1"
              min="0"
              max="15"
              required
              {...register("dormitorios")}
            />
            <input
              type="number"
              placeholder="Baños"
              step="1"
              min="0"
              max="15"
              required
              {...register("baños")}
            />
          </section>

          <section className="modal-metraje">
            <input
              type="number"
              placeholder="Área del terreno"
              step="1"
              min="0"
              required
              {...register("metraje_terreno")}
            />
            <input
              type="number"
              placeholder="Área edificada"
              step="1"
              min="0"
              required
              {...register("metraje_edificado")}
            />
          </section>

          <section className="modal-direccion">
            <select name="Departamento" required {...register("departamento")}>
              <option value="Departamento" defaultValue={"Departamento"}>
                Departamento
              </option>
              <option value="Montevideo">Montevideo</option>
              <option value="Canelones">Canelones</option>
              <option value="Maldonado">Maldonado</option>
              <option value="Rocha">Rocha</option>
            </select>

            <input
              type="text"
              placeholder="Barrio"
              required
              {...register("barrio")}
            />
          </section>

          <section className="modal-descripcion">
            <input
              type="text"
              placeholder="Direccion"
              required
              {...register("direccion")}
            />

            <textarea
              name="Descripcion"
              cols="30"
              rows="5"
              placeholder="Breve descripcion de la propiedad"
              required
              {...register("descripcion")}
            ></textarea>

            <input
              type="url"
              name="ubicacion"
              placeholder="URL de la ubicacion de la propiedad"
              {...register("mapa")}
            ></input>

            <input
              type="file"
              name="foto"
              onChange={fileOnChange}
              multiple
              // {...register("foto")}
            />
          </section>
        </div>

        <div>
          <button type="submit" className="btn-publicar" onClick={sendImage}>
            Publicar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalCrear;
