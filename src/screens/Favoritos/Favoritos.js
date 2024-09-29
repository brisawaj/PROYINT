import React from 'react';

import { Component} from 'react';
import "./Favoritos.css"
import UnaPelicula from '../../components/UnaPelicula/UnaPelicula';

class Favoritos extends Component {
    constructor (props){
        super(props);
        this.state = {favoritos: []}
    }
    
    componentDidMount (){
       const favoritos= this.obtenerFavoritos()
       this.setState({favoritos:favoritos})
    }
    obtenerFavoritos(){
        const favs= localStorage.getItem('favoritos')
             const favoritos=JSON.parse(favs)|| []
             return favoritos
    
       }
  

    
    render(){
        return(
            <div>
                <h1>Favoritos:</h1>
                <div className="PadreFavoritos">
                {this.state.favoritos.length > 0 ?
                this.state.favoritos.map((elm,idx) =>  <UnaPelicula  pelicula={elm} key= {`${idx}-${elm.name}`}/>):
                <h1 className="no-favorites">No tenes favoritos</h1>
            }</div>
            </div>
        )
    }
}

export default Favoritos