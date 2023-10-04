import React, { Component } from 'react';
import './nuevous.css'
export default class NuevoUs extends Component {
    render() {
        return (
            <div className='fondonuevous'>
                <h1>Nuevo Usuario</h1>
                <div className="Usuario">
                    <label> Usuario:
                        <input className="inputus" type="text" placeholder="Usuario"></input>
                    </label>
                    <label> Contraseña:
                        <input className="inputus" type="text" placeholder="contraseña"></input>
                    </label>
                    <label> Mail:
                        <input className="inputus" type="text" placeholder="Mail"></input>
                    </label>
                    <label> Tipo:
                        <select className="tipous" type="text" placeholder="Tipo">
                            <option>Comun</option>
                            <option>Admin</option>
                        </select>
                    </label>
                    <div className='botones'>
                    <span Onclick="" className="botonus">ingresar</span>
                    <span Onclick="" className="botonus2">cancelar</span>
                    </div>
                </div>
            </div>
        )
    }
}