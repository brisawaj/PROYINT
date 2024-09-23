import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './ResultadosBusqueda.css';

class ResultadosBusqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valorInput: "",
      listaPeliculas: [],
      respaldoPeliculas: [],
    };
  }

  evitarEnvio(evento) {
    evento.preventDefault();
  }

  actualizarTexto(evento) {
    this.setState(
      {
        valorInput: evento.target.value,
      },
      () => this.props.filtrarPorTexto(this.state.valorInput)
    );
  }

  filtrarPorTexto(valorInput) {
    let peliculasFiltradas = this.state.listaPeliculas.filter((pelicula) =>
      pelicula.name.toLowerCase().includes(valorInput.toLowerCase())
    );
    this.setState({
      listaPeliculas: peliculasFiltradas,
    });
  }

  render() {
    return (
      <div className="contenedor-busqueda">
        <form onSubmit={(evento) => this.evitarEnvio(evento)}>
          <input
            className="search-input"
            type="text"
            onChange={(evento) => this.actualizarTexto(evento)}
            value={this.state.valorInput}
            placeholder="Escribe el título..."
          />
        </form>
      </div>
    );
  }
}

export default ResultadosBusqueda;