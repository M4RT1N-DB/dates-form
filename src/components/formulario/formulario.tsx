import React, { Fragment, useState } from "react";
import Citas from "../../model/citas.model";
import { v4 as uuid } from "uuid";

export interface FormularioProps {
  createDate: Function;
}

type reactInputElement = React.ChangeEvent<HTMLInputElement>;
type reactTextAreaElement = React.ChangeEvent<HTMLTextAreaElement>;
type reactFormEvent = React.FormEvent;

const Formulario: React.FC<FormularioProps> = ({ createDate }) => {
  const [Cita, setCita] = useState<Citas>({
    id: "",
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  const [error, setError] = useState<boolean>(false);
  //-------------Trigger when input State change
  const handlerChange = (e: reactInputElement | reactTextAreaElement) => {
    setCita({
      ...Cita,
      [e.target.name]: e.target.value,
    });
  };
  //------------Trigger when submit form
  const handlerSubmit = (e: reactFormEvent) => {
    e.preventDefault();
    //---VALIDAR
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }
    //ELIMINAR MENSAJE PREVIO
    setError(false);
    //--ASIGNAR ID
    Cita.id = uuid();
    //--CRAER LA CITA
    createDate(Cita);
    //--REINICIAR EL FORM
    setCita({
      id: "",
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };
  //-----------Extract values
  const { mascota, propietario, fecha, hora, sintomas } = Cita;
  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son Obligatorios</p>
      ) : null}
      <form onSubmit={handlerSubmit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handlerChange}
          value={mascota}
        ></input>

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño"
          onChange={handlerChange}
          value={propietario}
        ></input>
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handlerChange}
          value={fecha}
        ></input>
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handlerChange}
          value={hora}
        ></input>
        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={handlerChange}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
