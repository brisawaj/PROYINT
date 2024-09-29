import React, {Component} from 'react';
import Loader from '../Loader/Loader';
import './DetallePelicula.css'


class DetallePelicula extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: null,
            loading: true
        }
    }

    componentDidMount (){
        fetch(`https://api.themoviedb.org/3/${this.props.mediaType}/${this.props.id}?api_key=7384aa0b23ce68ba408f9921ee711e62`)
        .then(res => res.json())
        .then(data => {
        
            this.setState({data: data, loading: false})
        })
        .catch(e =>{} )
    }
    
    render() {
        const { data, loading } = this.state;

        if (loading) {
            return <Loader />
        }

        return (
            <div className="PadreDetallePelicula">
                    <div className="DetallePoster">
                        <h1>{data.title}</h1>
                        <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.title}/>
                    </div>

                    <div className="DetalleInfo">
                        <p>Rating: {data.vote_average}</p>
                        <p>Estreno: {data.release_date}</p>
                        <p>Duracion: {data.runtime + ' min'}</p>
                        <p>Sinopsis: {data.overview}</p>
                        <div className="Generos">Generos: {data.genres.map((elm, idx) => <p>{elm.name}</p>)}
                    </div>
                </div>          
            </div>
        )
    }

}

export default DetallePelicula;

