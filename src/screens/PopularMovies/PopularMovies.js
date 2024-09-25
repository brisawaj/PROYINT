import { Component } from 'react';
import ListaPeliculas from "../../components/ListaPeliculas/ListaPeliculas";
import "./PopularMovies.css"
import { getMovies } from '../../utils/movie';
import Button from '../../components/Button/Button';

class PopularMovies extends Component {
    constructor() {
        super()
        this.state = { popular: [], filtroPopular: [], filtroValue:'', loaderPopular: true }
    }

    componentDidMount() {
       getMovies('popularity.desc').then(movies => {
           this.setState({
                popular: movies,
                filtroPopular: movies,
                loaderPopular: false,
            })
       })
    }

    handleFilterChange(e){
      const userValue= e.target.value
      this.setState({
        filtroValue: userValue,
        filtroPopular: this.state.popular.filter(movie => movie.title.toLowerCase().includes(userValue.toLowerCase()))
      })
    }

    render() {
        return (
            <div className="home-container">
                <input type='text' className="input-buscador" placeholder="Filtra película..." onChange= {(e)=>this.handleFilterChange(e)}value={this.state.filtroValue}/>
                <div className="movies-section">
                    <ListaPeliculas title={"Popular Movies"} loader={this.state.loaderPopular} peliculas={this.state.filtroPopular}/> 
                </div>
                <div className='load-more-container'>
                    <Button className="dark">
                        Cargar Mas
                    </Button>
                </div>
            </div>
        )
    }
}

export default PopularMovies;