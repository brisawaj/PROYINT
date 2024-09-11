import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Header.css"


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          valorInput: "",
          peliculas: [],
        };
      }

    componentDidMount () {
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=8942348488014765a582e61cb7357525')
        .then(res => res.json())
        .then( data  => this.setState({ peliculas: data.results}))
        .then( e => console.log(e))
    

      }
      render( ) {
        return(  
            <div className="header">
                {console.log(this.state.peliculas)}
                
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/favoritos">Favoritos</Link></li>
                    <li><Link to="/VerTodasTop">Top Peliculas</Link></li>
                    <li><Link to="/VerTodasUpcoming">Proximos Estrenos</Link></li>
                </ul>
            </div>
            )
      }

    
    
    
    }

    export default Header