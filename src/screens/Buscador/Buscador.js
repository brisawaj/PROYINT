import React, { Component } from 'react';
import UnaPelicula from '../../components/UnaPelicula/UnaPelicula';
import Loader from '../../components/Loader/Loader';
import './Buscador.css';

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: false,
      query: new URLSearchParams(this.props.location.search).get('query') || ''
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    
    fetch(`https://api.themoviedb.org/3/search/multi?query=${this.state.query}&api_key=8942348488014765a582e61cb7357525`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          results: data.results,
          loading: false
        });
      })
      .catch(e => {
        console.log(e);
        this.setState({ loading: false });
      });
  }

  render() {
    const { results, loading, query } = this.state;

    return (
      <div>
        <h1>Resultados de búsqueda para: {query}</h1>

        {loading ? (
          <Loader />
        ) : results.length > 0 ? (
          results.map((peli, idx) => <UnaPelicula data={peli} key={idx} />)
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </div>
    );
  }
}

export default Buscador;

