import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; 

const NotFound = () => {
  return (
    <div className="container"> 
      <h1>Error 404 - Contenido No Encontrado</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className="link">Volver al Inicio</Link> 
    </div>
  );
};

export default NotFound;
