import React, { Component } from 'react';
import './zona.css'
export default class Zona extends Component {
    render() {
        return (
            <div className="fondozona">
                <h1 className='zonah1'> Zona </h1>
                <div class="Contenedor2">
                    <div class="zona">
                        <label> quirofano:
                            <input className='inputzona' type="number" placeholder="habitacion" />
                        </label>
                        <label> habitacion:
                            <input className='inputzona' type="number" placeholder="habitacion" />
                        </label>
                        <div>
                            <span onClick="" className="botonzona">ingresar</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}