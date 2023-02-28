import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { postInmueble } from "../../api/Rule_inmuebles";
import "./modalCrear.css";

function ModalCrear(props) {
  const [nuevoInmueble, setNuevoInmueble] = useState({});

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

  return (
    <div className="fondoModal">
      <form className="formCrear" onSubmit={handleSubmit(onSubmit)}>
        <button onClick={props.cerrarModal}>Atras</button>
        <h2>Registrar nueva publicacion</h2>

        <section>
          <select name="Operacion" required {...register("operacion", require)}>
            <option value="Tipo de Operacion" selected>
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

        <section>
          <select name="Tipo" required {...register("inmueble")}>
            <option value="Tipo de propiedad" selected>
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

        <section>
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

        <section>
          <select name="Departamento" required {...register("departamento")}>
            <option value="Departamento" selected>
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
          <input
            type="text"
            placeholder="Direccion"
            required
            {...register("direccion")}
          />
        </section>

        <section>
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

          <input type="file" name="foto" {...register("foto")} />
        </section>

        <div>
          <button type="submit">Publicar</button>
        </div>
      </form>
    </div>
  );
}

export default ModalCrear;
