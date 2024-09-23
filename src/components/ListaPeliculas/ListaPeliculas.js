import UnaPelicula from "../../components/UnaPelicula/UnaPelicula";
import { Component } from 'react';
import Loader from "../../components/Loader/Loader";
import './ListaPeliculas.css'

class ListaPeliculas extends Component {
    constructor() {

        super()
    }

    render() {
        return (
            <div> 
                <h1>{this.props.title}</h1>
                <div className='ListaPeliculas_container'> 
                        {
                            this.props.loader ? 
                                <Loader /> : 
                                this.props.peliculas.map((pelicula, idx) => <UnaPelicula pelicula={pelicula} key={idx}></UnaPelicula>)
                        }
                </div>
            </div>
        )
    }
}
export default ListaPeliculas