import "./UnaPelicula.css"
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from "../Button/Button";


const IMAGES_URL = 'https://image.tmdb.org/t/p/w1280'

class UnaPelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
        console.log(this.props);
    }

    componentDidMount() {
        console.log('acaaaaa', this.props.pelicula)
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
                <img className="poster" src={IMAGES_URL + this.props.pelicula.poster_path} />
                <h2 className="titulo">{this.props.pelicula?.name || this.props.pelicula.title}</h2>
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
                <Button>Agregar a Favoritos</Button>
                <Link to={'/pelicula/533535'} className="link-detalle">
                    Ir a detalle
                </Link>
            </div>
        )
    }
}

export default UnaPelicula;