import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UnaPelicula from '../../components/UnaPelicula/UnaPelicula';
import './Buscador.css';

const Buscador = () => {
  const { query } = useParams(); 
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&api_key=8942348488014765a582e61cb7357525`)
      .then(res => res.json())
      .then(data => {
        setResults(data.results);
      })
      .catch(e => console.log(e));
  }, [query]); 

  return (
    <div>
      <h1>Resultados de búsqueda para: {query}</h1>
      {results.length > 0 ? (
        results.map((peli, idx) => <UnaPelicula data={peli} key={idx} />)
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </div>
  );
};

export default Buscador;

