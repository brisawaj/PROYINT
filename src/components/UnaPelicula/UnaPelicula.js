import "./UnaPelicula.css"
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from "../Button/Button";


const IMAGES_URL = 'https://image.tmdb.org/t/p/w300'

class UnaPelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            isFav: this.chequearFavoritos(props.pelicula.id)
        }
       
    }

  

    showDescription() {
        this.setState({ show: true })
    }

    hideDescription() {
        this.setState({ show: false })
    }
   
   obtenerFavoritos(){
    const favs= localStorage.getItem('favoritos')
         const favoritos=JSON.parse(favs)|| []
         return favoritos

   }
    agregarFavoritos(pelicula){
       const favoritos= this.obtenerFavoritos()
        localStorage.setItem('favoritos',JSON.stringify([...favoritos,pelicula]))
        this.setState({isFav:this.chequearFavoritos(pelicula.id)})
        
    }
   sacarFavoritos(peliculaId){
    const favoritos= this.obtenerFavoritos()
         const newFavs= favoritos.filter(fav => fav.id ===peliculaId)
         localStorage.setItem('favoritos',JSON.stringify(newFavs))
         this.setState({isFav:this.chequearFavoritos(peliculaId)})
         
   }
 
    chequearFavoritos(peliculaId){
        const favoritos= this.obtenerFavoritos()
        return Boolean(favoritos.find(fav =>fav.id === peliculaId))

    }
    render() {
        return (
            <div className="una-pelicula">
                <img className="poster" width={160} height= {230} src={IMAGES_URL + this.props.pelicula.poster_path} alt={this.props.pelicula.title} />
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
               {this.state.isFav ? 
                <Button onClick={()=>this.sacarFavoritos(this.props.pelicula)}>sacar de Favoritos</Button>:
                 <Button onClick={()=>this.agregarFavoritos(this.props.pelicula)}>Agregar a Favoritos</Button>}
                <Link to={`/pelicula/${this.props.pelicula.id}?media_type=${this.props.pelicula.media_type || 'movie'}`} className="link-detalle">
                    Ir a detalle
                </Link>
            </div>
        )
    }
}

export default UnaPelicula;