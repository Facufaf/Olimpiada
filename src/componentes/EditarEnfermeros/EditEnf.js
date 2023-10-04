import React, { Component } from 'react';
import "./editenf.css"
export default class EditEnf extends Component {
    render() {
        return (
        <div className="container-editar-enfermero">
            <h1> Editar Enfermeros </h1>
                <div className="Contenedor-editar-enfermeros">
                    <div className="Enfermeros-editar">
                    <label> Nombre:
                                <input ClassName="InputEditEnfermero" type="text" placeholder="Nombre"/>
                            </label>
                            <label> Apellido:
                                <input ClassName ="InputEditEnfermero" type="text" placeholder="Apellido"/>
                            </label>
                            <label> Documento:
                                <input ClassName ="InputEditEnfermero" type="text" placeholder="Documento"/>
                            </label>
                            <label> Especialidad:
                                <input ClassName="InputEditEnfermero" type="text"  placeholder="Especialidad"/>
                            </label>
                            <span Onclick="" className="BotonEditEnfermero">Editar</span>
                    </div>

                </div>
        </div>
        )
    }
}