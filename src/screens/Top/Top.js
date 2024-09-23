import { Component } from 'react';
import ListaPeliculas from "../../components/ListaPeliculas/ListaPeliculas";
import "./Top.css"
import { getMovies } from '../../utils/movie';
import Button from '../../components/Button/Button';

class Top extends Component {
    constructor() {
        super()
        this.state = { popular: [], loaderPopular: true }
    }

    componentDidMount() {
       getMovies('vote_average.desc').then(movies => {
           this.setState({
                popular: movies,
                loaderPopular: false,
            })
       })
    }

    render() {
        return (
            <div className="home-container">
                <div className="movies-section">
                    <ListaPeliculas title={"Top Rated Movies"} loader={this.state.loaderPopular} peliculas={this.state.popular}/> 
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

export default Top;