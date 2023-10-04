import React from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import './App.css';
import Login from './componentes/Login/Login';
import Llamados from './componentes/Llamados/Llamados';
import Doc from './componentes/Documento/Doc';
import NewEnf from './componentes/NuevoEnfermero/NewEnf';
import NewPac from './componentes/NuevoPaciente/NewPac';
import Pacientes from './componentes/Pacientes/Pacientes';
import EditEnf from './componentes/EditarEnfermeros/EditEnf';
import NuevoUs from './componentes/NuevoUsuario/NuevoUs';
import TarjLlamados from './componentes/Tarjetallamados/TarjLlamados';
import TarjetaEnfermero from './componentes/TarjetaEnfermero/TarjetaEnfermero';
import Zona from './componentes/zona/Zona';



export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/llamados" element={<Llamados />} />
          <Route path="/documento" element={<Doc />} />
          <Route path="/nuevoenfermero" element={<NewEnf />}/>
          <Route path="/nuevopaciente" element={<NewPac />}/>
          <Route path="/tarjetaEnfermero" element={<TarjetaEnfermero />}/>
          <Route path="/pacientes" element={<Pacientes />}/>
          <Route path="/editarenfermeros" element={<EditEnf />}/> 
          <Route path="/nuevousuario" element={<NuevoUs />}/> 
          <Route path="/tarjetallamados" element={<TarjLlamados />}/> 
          <Route path="/zona" element={<Zona />}/>
          <Route path="*" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
