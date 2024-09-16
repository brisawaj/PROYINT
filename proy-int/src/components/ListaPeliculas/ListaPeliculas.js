
import UnaPelicula from "../../components/UnaPelicula/UnaPelicula";
import { Component } from 'react';
import Loader from "../../components/Loader/Loader";

class ListaPeliculas extends Component {
    constructor() {

        super()
    }

    render() {
        return (

            <div className='container'> 
                    <h1>{this.props.title}</h1>
                    {
                        this.props.loader ? 
                            <Loader /> : 
                            this.props.peliculas.map((pelicula, idx) => <UnaPelicula pelicula={pelicula} key={idx}></UnaPelicula>)
                    }
                </div>
        )
    }
}
export default ListaPeliculas