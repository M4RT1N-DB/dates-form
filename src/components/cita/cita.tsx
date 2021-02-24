import React from 'react';

import PropTypes from 'prop-types';

import Citas from "../../model/citas.model";

export interface CitaProps {
    cita:Citas;
    deleteDate:Function;
}
 
const Cita: React.FC<CitaProps> = ({cita,deleteDate}) => {
    const {id,mascota,propietario,fecha,hora,sintomas} =cita;
    return ( 
        <div className="cita">
            <p>Mascota: <span>{mascota}</span></p>
            <p>Dueño: <span>{propietario}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>
            <button type="button" className="button eliminar u-full-width" onClick={()=>deleteDate(id)}>Eliminar &times;</button>
        </div>
     );
};

Cita.propTypes={
    cita:PropTypes.any.isRequired,
    deleteDate:PropTypes.func.isRequired,
}
 
export default Cita;