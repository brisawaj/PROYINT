import UnaPelicula from "../../components/UnaPelicula/UnaPelicula";
import { Component } from 'react';
import Loader from "../../components/Loader/Loader";
import './ListaPeliculas.css'
import { agregarFavoritosStorage, sacarFavoritosStorage } from "../../utils/fav";

class ListaPeliculas extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div className='ListaPeliculas_container'>
                    {
                        this.props.loader ?
                            <Loader /> :
                            this.props.peliculas.map((pelicula, idx) => <UnaPelicula
                                key={`${idx}-${pelicula.name}`}
                                pelicula={pelicula}
                                agregarFavorito={() => agregarFavoritosStorage(pelicula)}
                                sacarFavorito={() => sacarFavoritosStorage(pelicula.id)}
                            ></UnaPelicula>)
                    }
                </div>
            </div>
        )
    }
}
export default ListaPeliculas