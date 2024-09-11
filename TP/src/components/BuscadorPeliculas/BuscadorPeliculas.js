import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./BuscadorPeliculas.css";

class BuscarPeliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      listaPeliculas: [],
    };
  }

  manejarEnvio(evento) {
    evento.preventDefault();
    this.props.history.push(`/busqueda/${this.state.query}`);
  }

  actualizarValor(evento) {
    this.setState({
      query: evento.target.value,
    });
  }

  render() {
    return (
      <div className="contenedor-buscador">
        <form onSubmit={(evento) => this.manejarEnvio(evento)}>
          <input
            className="input-buscador"
            type="text"
            onChange={(evento) => this.actualizarValor(evento)}
            value={this.state.query}
            placeholder="Buscar película..."
          />
          <i className="fas fa-search icono-buscador"></i>
          {console.log(this.state.query)}
        </form>
      </div>
    );
  }
}

export default BuscarPeliculas;