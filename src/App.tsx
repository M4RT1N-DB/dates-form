import React, { Fragment, useState, useEffect } from "react";

import PropTypes from 'prop-types';

import Formulario from "./components/formulario/formulario";
import Cita from "./components/cita/cita";

import Citas from "./model/citas.model";

function App(): JSX.Element {
  //-------CITAS EN LOCALSTORAGE
  let dataStorage: any = localStorage.getItem("citas");
  let initialDates: Citas[] = JSON.parse(dataStorage);
  if (!initialDates) {
    initialDates = [];
  }
  //-------ARREGLO DE CITAS
  const [citas, setCitas] = useState<Citas[]>(initialDates);
  //-------USEEFFECT SOME OPERATIONS
  useEffect(() => {
    console.log('USEeFFECT')
      localStorage.setItem("citas", JSON.stringify(citas));
     
  }, [citas]);


  //-------AGRAGAR CITAS
  const createDate: any = (cita: Citas) => {
    setCitas([...citas, cita]);
  };
  //---------DELETE DATES
  const deleteDate = (id: string) => {
    const newDates: Citas[] = citas.filter((date) => {
      return date.id !== id;
    });
    setCitas(newDates);
  };
  //-----------CONDITIONAL MESSAGE
  const title = citas.length === 0 ? "No hay Citas" : "Administra tus Citas";
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario createDate={createDate} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {citas.map((cita) => {
              return <Cita key={cita.id} cita={cita} deleteDate={deleteDate} />;
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Formulario.propTypes={
  createDate:PropTypes.func.isRequired,
}

export default App;
