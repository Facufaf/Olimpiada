import React, { Component } from 'react';
import "./pacientes.css"
import imgTar from "./tuerca.png"
export default class TarjetePaciente extends Component{
    render() {
        return(
    <div className="Container-Paciente">
        <h1>Tarjertas de Pacientes</h1>
        <div className="Contenedor-Tarjetas-Paciente">  
            <div className="tarjetaPaciente">
                <div className="contenido-tarjeta-Paciente">
                    <p>Apellidos</p>
                    <p>Nombres</p>
                    <p>Fecha de Nacimiento</p>
                    <div className="imagen-tarjeta-paciente-editar">
                    
                        <span onclick="" className="boton"><img className ="imagen-tarjeta-paciente-editar"src={imgTar}/> </span> 
                </div>
                
                </div>
            </div>
            
            <div className="tarjetaPaciente">
                <div className="contenido-tarjeta-paciente">
                    <p>Apellidos</p>
                    <p>Nombres</p>
                    <p>Fecha de Nacimiento</p>
                        <div className="imagen-tarjeta-paciente-editar">

                        <a href="http://localhost:3000/nuevopaciente"><span onclick="" className="boton"><img className ="imagen-tarjeta-paciente-editar"src={imgTar}/></span></a>
                        </div>
                        
                </div>
                
            </div>
        
        </div>                
    </div>
        )
    }
}