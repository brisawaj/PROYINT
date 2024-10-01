import React, { Component } from 'react';
import UnaPelicula from '../../components/UnaPelicula/UnaPelicula';
import Loader from '../../components/Loader/Loader';
import './Buscador.css';
import { agregarFavoritosStorage, sacarFavoritosStorage } from '../../utils/fav';

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    fetch(`https://api.themoviedb.org/3/search/multi?query=${this.props.location.state.query}&api_key=8942348488014765a582e61cb7357525`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          results: data.results.filter(movie => movie.poster_path),
          loading: false
        });
      })
      .catch(e => {

        this.setState({ loading: false });
      });
  }

  render() {
    const { results, loading } = this.state;

    return (
      <div>
        <h1>Resultados de búsqueda para: {this.props.location.state.query}</h1>
        <div className="ListaPeliculas_container">
          {loading ? (
            <Loader />
          ) : results.length > 0 ? (
            results.map((pelicula, idx) => <UnaPelicula
              key={`${idx}-${pelicula.name}`}
              pelicula={pelicula}
              agregarFavorito={() => agregarFavoritosStorage(pelicula)}
              sacarFavorito={() => sacarFavoritosStorage(pelicula.id)}
            />)
          ) : (
            <p>No se encontraron resultados</p>
          )}
        </div>
      </div>

    );
  }
}

export default Buscador;