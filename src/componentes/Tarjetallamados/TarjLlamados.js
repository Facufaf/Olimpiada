import React, { Component } from 'react';
import "./tarjLlamados.css"
import imgTar from "./tuerca.png"
export default class TarjLlamados extends Component{
    render() {
        return( 
            <div className="Container">
                <div className="header">
            <h1><a href="http://localhost:3000/Pacientes"><span onclick="" className="boton-header-listado-pacientes">Listado pacientes</span></a></h1>
        </div>
        <h1>Llamados</h1>      
        <div className="ContenedorTarjetas">   
            {/* <!-- Tarjeta 1 --> */}
            <div className="tarjeta">
                <div class="contenido-tarjeta">
                    <p>FechaLlamados: 12:23</p>
                    <p>Zona:</p>
                    <p>Ubicacion:</p>
                    <p>Enfermero:</p>
                    <p>Tipo:</p>
                    <p>FechaAtendido:</p>
                    <p>Diagnostico:</p>
                    <p>Tratamiento:</p>
                    <p>Paciente:</p>
                    <p>Estado:</p>
                </div>
                <div>
                <a href="http://localhost:3000/llamados"><span onclick="" className="botontarjllamados"><img className ="imagen-tarjeta"src={imgTar}/></span></a>
                </div>
            </div>
            
            {/* <!-- Tarjeta 2 --> */}
            <div class="tarjeta">
                <div class="contenido-tarjeta">
                    <p>FechaLlamados: 13:45</p>
                    <p>Zona:</p>
                    <p>Ubicacion:</p>
                    <p>Enfermero:</p>
                    <p>Tipo:</p>
                    <p>FechaAtendido:</p>
                    <p>Diagnostico:</p>
                    <p>Tratamiento:</p>
                    <p>Paciente:</p>
                    <p>Estado:</p>
                </div>
                <div>
                <a href="http://localhost:3000/llamados"><span onclick="" className="botontarjllamados"><img className ="imagen-tarjeta"src={imgTar}/></span></a>
                </div>
            </div>
            
            {/* <!-- Agrega más tarjetas aquí si es necesario --> */}
            <div class="tarjeta">
                <div class="contenido-tarjeta">
                    <p>FechaLlamados: 13:45</p>
                    <p>Zona:</p>
                    <p>Ubicacion:</p>
                    <p>Enfermero:</p>
                    <p>Tipo:</p>
                    <p>FechaAtendido:</p>
                    <p>Diagnostico:</p>
                    <p>Tratamiento:</p>
                    <p>Paciente:</p>
                    <p>Estado:</p>
                </div>
                <div>
                <a href="http://localhost:3000/llamados"><span onclick="" className="botontarjllamados"><img className ="imagen-tarjeta"src={imgTar}/></span></a>
                </div>
            </div>
        </div>                
    </div>
        )
    }
}
