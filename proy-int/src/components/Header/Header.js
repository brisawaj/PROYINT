import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Header.css"
import SearchForm from "../SearchForm/SearchForm";


class Header extends Component {
    constructor(props) {
        super(props);
      }

      render( ) {
        return(  
            <div className="header">                
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/favoritos">Favoritos</Link></li>
                    <li><Link to="/top">Top Peliculas</Link></li>
                    <li><Link to="/upcoming">Proximos Estrenos</Link></li>
                </ul>
               <SearchForm/>
            </div>
            )
      }

    
    
    
    }

    export default Header