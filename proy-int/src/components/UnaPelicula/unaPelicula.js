import "./UnaPelicula.css"
import react, { Component } from 'react';
import { Link } from 'react-router-dom';


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
            <div>
                <h2 className="titulo">{this.props.pelicula.name || this.props.pelicula.title}</h2>
                <img className="poster" src={IMAGES_URL + this.props.pelicula.poster_path} />
                {this.state.show &&
                    <p>{this.props.pelicula.overview}</p>
                }
                <button onClick={() => {
                    if (this.state.show) {
                        this.hideDescription()
                    } else {
                        this.showDescription()
                    }
                }}>{this.state.show ? 'Ocultar' : 'Mostrar'}</button>
                <button>Agregar a Favoritos</button>
                <Link to={'/pelicula/533535'}>
                    Detalle
                </Link>
            </div>
        )
    }
}

export default UnaPelicula;