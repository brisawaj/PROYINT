import { Component } from 'react';
import ListaPeliculas from "../../components/ListaPeliculas/ListaPeliculas";
import "./Home.css"
import SearchForm from '../../components/SearchForm/SearchForm';

class Home extends Component {
    constructor() {
        super()
        this.state = { popular: [], topRated: [], loaderTop: true, loaderPopular: true }

    }

    gethMovies(type) {
        const sortBy = type === 'popular' ? "popularity.desc" : "vote_average.desc"
        fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=${sortBy}&api_key=8942348488014765a582e61cb7357525`)
            .then(res => res.json())
            .then(data => {
                if (type == 'popular') {
                    this.setState({
                        popular: data.results.slice(0,5),
                        loaderPopular: false
                    })
                } else if (type == 'top') {
                    this.setState({
                        topRated: data.results.slice(0,5),
                        loaderTopRated: false
                    })
                }
            })
            .catch(e => console.log(e))
    }

    componentDidMount() {
       this.gethMovies('popular')
       this.gethMovies('top')
    }

    render() {
        return (
            <div className="home-container">
                <SearchForm />
                <div className="movies-section">
                    <ListaPeliculas title={"Popular Movies"} loader={this.state.loaderPopular} peliculas={this.state.popular}/> 
                    <ListaPeliculas title={"Top Rated Movies"} loader={this.state.loaderTopRated} peliculas={this.state.topRated}/> 
                </div>
            </div>
        )
    }
}
export default Home;