import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UnaPelicula from '../../components/UnaPelicula/UnaPelicula';
import Loader from '../../components/Loader/Loader';
import './Buscador.css';

const Buscador = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&api_key=8942348488014765a582e61cb7357525`)
      .then(res => res.json())
      .then(data => {
        setResults(data.results);
        console.log('resultados', data.results)
        setLoading(false);
      })
      .catch(e => console.log(e));
    setLoading(false);
  }, [query]);

  return (
    <div>
      <h1>Resultados de búsqueda para: {query}</h1>
      
      {(() => {
        if (loading) {
          return <Loader/>;
        } else if (results.length > 0) {
          return results.map((peli, idx) => <UnaPelicula data={peli} key={idx} />);
        } else {
          return <p>No se encontraron resultados</p>;
        }
      })()}
      
    </div>
  )};
export default Buscador;

