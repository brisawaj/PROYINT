import React from 'react';

import { Component } from 'react';
import "./Favoritos.css"
import UnaPelicula from '../../components/UnaPelicula/UnaPelicula';
import { agregarFavoritosStorage, obtenerFavoritosStorage, sacarFavoritosStorage } from '../../utils/fav';

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = { favoritos: [] }
    }

    componentDidMount() {
        this.actualizarFavoritos();
    }

    actualizarFavoritos = () => {
        const favoritos = obtenerFavoritosStorage();
        this.setState({ favoritos });
    }

    agregarFavorito = (pelicula) => {
        agregarFavoritosStorage(pelicula);
        this.actualizarFavoritos();
    }

    sacarFavorito = (peliculaId) => {
        sacarFavoritosStorage(peliculaId);
        this.actualizarFavoritos();
    }

    render() {
        return (
            <div>
                <h1>Favoritos:</h1>
                <div className="ListaPeliculas_container">
                    {this.state.favoritos.length > 0 ?
                        this.state.favoritos.map((pelicula, idx) => <UnaPelicula
                            key={`${idx}-${pelicula.name}`}
                            pelicula={pelicula}
                            agregarFavorito={() => this.agregarFavorito(pelicula)}
                            sacarFavorito={() => this.sacarFavorito(pelicula.id)}
                        />) :
                        <h1 className="no-favorites">No tenes favoritos</h1>
                    }</div>
            </div>
        )
    }
}

export default Favoritos