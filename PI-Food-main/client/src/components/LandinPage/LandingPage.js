import React from 'react';
import { Link } from 'react-router-dom';
import "./LandingPage.css";

const LandingPage = () => {
    return (
        <div className='fondo'>
        <div className='boton'>
            <p className='titulo1'>Bienvenidos</p>
            <Link to="/home"><button className='boton1'>Ver Recetas</button></Link>
            <div className='creado'></div>
            <p className='diseño'>Creado y diseñado por Francisco | Coypright 2023</p>
            
        </div>
        </div>
        
        );

};
export default LandingPage;