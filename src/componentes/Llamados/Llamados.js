import React, { Component } from 'react';
import './llamados.css'
export default class Llamados extends Component {
    render() {
        return (
            <div className='fondollamados'>
                <h1>Llamados</h1>
                <div className='llamados'>
                    <label> Zonas:
                        <input className='inputllamados' type="text" placeholder="zonas"></input>
                    </label>
                    <label> Ubicación:
                        <input className='inputllamados' type="text" placeholder="Ubicación"></input>
                    </label>
                    <label> Enfermero:
                        <input className='inputllamados' type="text" placeholder="Enfermero"></input>
                    </label>
                    <label> Tipo:
                        <select className='tipo' type="text" placeholder="Tipo">
                            <option>Emergencias</option>
                            <option>Normal</option>
                        </select>
                    </label>
                    <label> FechaAtendido:
                        <input className='inputllamados' type="date" placeholder="FechaAtendido"></input>
                    </label>
                    <label> Diagnostico:
                        <input className='inputllamados' type="text" placeholder="Diagnostico"></input>
                    </label>
                    <label> Tratamiento:
                        <input className='inputllamados' type="text" placeholder="tratamiento"></input>
                    </label>
                    <label> paciente:
                        <input className='inputllamados' type="text" placeholder="paciente"></input>
                    </label>
                    <label> Estado:
                        <select className='estado'>
                            <option>Pendiente</option>
                            <option>Atendido</option>
                            <option>Finalizado</option>
                        </select>
                    </label>
                    <div>
                    <a href="http://localhost:3000/documento"><span Onclick="" className="botonllamados">continuar</span></a>
                    </div>
                </div>
            </div>
        )
    }
}