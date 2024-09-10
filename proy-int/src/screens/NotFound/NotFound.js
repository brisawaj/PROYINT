import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Error 404 - Contenido No Encontrado</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/">Volver al Inicio</Link>
    </div>
  );
};

export default NotFound;