import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Header.css"

class Header extends Component {
    constructor(props) {
        super(props);
      }
      render( ) {
        return(  
          <div className="header-container">
              <div className="lista-horizontal">  
              <img src="https://images.vexels.com/media/users/3/220740/isolated/preview/21dd8b736fd55ca78afad1913daa86f5-icono-de-trazo-de-entradas-de-cine-clasico.png" alt="Descripción de la imagen" />              
              <ul>
                  <li><Link to="/" className="nav-item">Home</Link></li>
                  <li><Link to="/favoritos" className="nav-item">Favoritos</Link></li>
                  <li><Link to="/top" className="nav-item">Top Movies</Link></li>
                  <li><Link to="/popular" className="nav-item">Popular Movies</Link></li>
              </ul>
            </div>
          </div>
            )
      }
    }

    export default Header