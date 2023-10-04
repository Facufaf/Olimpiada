import React, { Component } from 'react';
import './newEnf.css'

class NewEnf extends Component {
    render() {
        return (
            <div className='fondonewenf'>
                <h1>Nuevo Enfermero</h1>
                <div class="formularioE">
                    <label> Nombre:
                        <input className='inputnewenf' type="text" placeholder="Nombre"></input>
                    </label>
                    <label> Apellido:
                        <input className='inputnewenf' type="text" placeholder="Apellido"></input>
                    </label>
                    <label> Documento:
                        <input className='inputnewenf' type="text" placeholder="Documento"></input>
                    </label>
                    <label> Especialidad:
                        <input className='inputnewenf' type="text" placeholder="Especialidad"></input>
                    </label>
                    <div>
                        <span onClick="" className="botonnewenf">continuar</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewEnf;