import "./UnaPelicula.css"
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from "../Button/Button";
import { esFavorito } from "../../utils/fav";

const IMAGES_URL = 'https://image.tmdb.org/t/p/w300'

class UnaPelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            esFav: esFavorito(this.props.pelicula.id)
        }

    }

    componentDidUpdate(prevProps) {
        if (prevProps.pelicula.id !== this.props.pelicula.id) {
            this.setState({ esFav: esFavorito(this.props.pelicula.id) });
        }
    }

    showDescription() {
        this.setState({ show: true })
    }

    hideDescription() {
        this.setState({ show: false })
    }

    render() {
        return (
            <div className="una-pelicula">
                <img className="poster" width={160} height={230} src={IMAGES_URL + this.props.pelicula.poster_path} alt={this.props.pelicula.title} />
                <h2 className="titulo">{this.props.pelicula.name || this.props.pelicula.title}</h2>
                {this.state.show &&
                    <p>{this.props.pelicula.overview}</p>
                }
                <Button onClick={() => {
                    if (this.state.show) {
                        this.hideDescription()
                    } else {
                        this.showDescription()
                    }
                }}>{this.state.show ? 'Ocultar descripcion' : 'Mostrar descripcion'}</Button>
                {
                    this.state.esFav ?
                        <Button onClick={() => {
                            this.props.sacarFavorito()
                            this.setState({ esFav: false });
                        }}>Sacar de Favoritos</Button> :
                        <Button onClick={() => {
                            this.props.agregarFavorito()
                            this.setState({ esFav: true });
                        }}>Agregar a Favoritos</Button>
                }
                <Link to={`/pelicula/${this.props.pelicula.id}?media_type=${this.props.pelicula.media_type || 'movie'}`} className="link-detalle">
                    Ir a detalle
                </Link>
            </div>
        )
    }
}

export default UnaPelicula;