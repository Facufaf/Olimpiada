import React, { Component } from 'react';
import './doc.css'
export default class Doc extends Component {
    render() {
        return (
            <div class="fondodoc">
                <h1 className='doch1'>Documento</h1>
                <div class="Contenedor2">
                    <div class="documento">
                        <label> Documento:
                            <input className='inputdoc' type="text" placeholder="Documento" />
                        </label>
                        <div>
                        <a href="http://localhost:3000/nuevopaciente"><span onClick="" className="botondoc">continuar</span></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}