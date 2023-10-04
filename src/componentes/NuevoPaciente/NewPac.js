import React, { Component } from 'react';
import './newPac.css'

class NewPac extends Component {
    render() {
        return (
            <div className='fondonewpac'>
            <h1>Nuevo Paciente</h1>
            <div className="formularioP">
                <label> Nombre:
                        <input className="inputnewpac" type="text" placeholder="Nombre"/>
                </label>
                <label> Apellido:
                        <input className="inputnewpac" type="text" placeholder="Apellido"/>
                </label>
                <label> Fecha de Nacimiento:
                        <input className="inputnewpac" type="date" placeholder="Fecha de Nacimiento"/>
                </label>
                <div className='botones'>
                    <span Onclick="" className="botonus">ingresar</span>
                    <a href='http://localhost:3000/zona'><span Onclick="" className="botonus2">Zona</span></a>
                    </div>
            </div>
        </div>
        )

    }
}
export default NewPac;