import { Component } from 'react';
import ListaPeliculas from "../../components/ListaPeliculas/ListaPeliculas";
import "./Home.css"
import SearchForm from '../../components/SearchForm/SearchForm';
import { getMovies } from '../../utils/movie';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { popular: [], topRated: [], loaderTop: true, loaderPopular: true }
    }

    componentDidMount() {
       getMovies('popularity.desc').then(movies => {
           this.setState({
                popular: movies.slice(0,5),
                loaderPopular: false,
            })
       })
       getMovies('vote_average.desc').then(movies => {
           this.setState({
                topRated: movies.slice(0, 5),
                loaderTopRated: false,
           })
       })
    }

    render() {
        return (
            <div className="home-container">
                <SearchForm history={this.props.history}/>
                <div className="movies-section">
                    <ListaPeliculas title={"Popular Movies"} loader={this.state.loaderPopular} peliculas={this.state.popular}/>
                    <div className='load-more-container'>
                        <Link to="/popular">
                            <Button className="dark">
                                Mostrar todas
                            </Button>
                        </Link>
                    </div> 
                </div>
                <div className="movies-section">
                    <ListaPeliculas title={"Top Rated Movies"} loader={this.state.loaderTopRated} peliculas={this.state.topRated}/> 
                    <div className='load-more-container'>
                        <Link to="/top">
                            <Button className="dark">
                                Mostrar todas
                            </Button>
                        </Link>
                    </div> 
                </div>
            </div>
        )
    }
}
export default Home;