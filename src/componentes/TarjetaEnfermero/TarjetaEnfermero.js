import React, { Component } from 'react';
import './TarjetaEnfermero.css'
import imgTar from "./tuerca.png"
export default class Llamados extends Component {
    render() {
        return (<div className="Container-enfermero">
        <h1>TarjertasEnfermero</h1>
        <div className="Contenedor-Tarjetas-Enfermero">   
            {/* <!-- Tarjeta 1 --> */}
            <div className="tarjetaEnfermero">
                <div className="contenido-tarjeta-enfermero">
                    <p>Apellidos</p>
                    <p>Nombres</p>
                    <p>Documento</p>
                    <p>Especialidad</p>
                    <div className="imagen-tarjeta-enfermero">
                        {/* <!-- Enlace para redireccionar a documento.html --> */}
                        <a href="http://localhost:3000/editarenfermeros"> <span onclick="" className="boton"><img className ="imagen-tarjeta-enfermero"src={imgTar}/></span></a>
                </div>
                
                </div>
            </div>
            
            {/* <!-- Tarjeta 2 --> */}
            <div className="tarjetaEnfermero">
                <div className="contenido-tarjeta-enfermero">
                    <p>Apellidos</p>
                    <p>Nombres</p>
                    <p>Documento</p>
                    <p>Especialidad</p>
                        <div className="imagen-tarjeta-enfermero">
                        {/* <!-- Enlace para redireccionar a documento.html --> */}
                      <a href="http://localhost:3000/editarenfermeros"> <span onclick="" className="boton"><img className ="imagen-tarjeta-enfermero"src={imgTar}/></span></a>
                    </div>
                </div>
                
            </div>
        </div>
        
            {/* <!-- Agrega más tarjetas aquí si es necesario --> */}
        </div>                

        )
    }
} 
