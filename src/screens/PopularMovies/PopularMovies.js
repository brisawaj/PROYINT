import { Component } from 'react';
import ListaPeliculas from "../../components/ListaPeliculas/ListaPeliculas";
import "./PopularMovies.css"
import { getMovies } from '../../utils/movie';
import Button from '../../components/Button/Button';
import FilterForm from '../../components/FilterForm/FilterForm';

class PopularMovies extends Component {
    constructor() {
        super()
        this.state = { popular: [], loaderPopular: true }
    }

    componentDidMount() {
       getMovies('popularity.desc').then(movies => {
           this.setState({
                popular: movies,
                loaderPopular: false,
            })
       })
    }

    render() {
        return (
            <div className="home-container">
            <FilterForm/>
                <div className="movies-section">
                    <ListaPeliculas title={"Popular Movies"} loader={this.state.loaderPopular} peliculas={this.state.popular}/> 
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