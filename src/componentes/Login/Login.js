import React, { Component } from 'react';
import './login.css'

export default class Login extends Component {
    render() {
        return (
            <div className='fondolog'>
                <h1 className='loginh1'>Login</h1>
                <div className="Contenedor2">
                    <div class="login">
                        <label> Usuario:
                            <input className='inputlog' type="text" placeholder="Usuario" />
                        </label>
                        <label> Contraseña:
                            <input className='inputlog' type="text" placeholder="Contraseña" />
                        </label>
                        <div>
                            <a href="http://localhost:3000/tarjetallamados"><span onClick="" className="botonlog">Continuar</span></a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}