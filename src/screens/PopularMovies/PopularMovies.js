import { Component } from 'react';
import ListaPeliculas from "../../components/ListaPeliculas/ListaPeliculas";
import "./PopularMovies.css"
import { getMovies } from '../../utils/movie';
import Button from '../../components/Button/Button';

class PopularMovies extends Component {
    constructor() {
        super()
        this.state = { popular: [], filtroPopular: [], filtroValue:'', actualPage: 1, loaderPopular: true }
    }

    componentDidMount() {
       getMovies('popularity.desc', this.state.actualPage).then(movies => {
           this.setState({
                popular: movies,
                filtroPopular: movies,
                loaderPopular: false,
                actualPage: this.state.actualPage + 1
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

    handleLoadMore(e){
        getMovies('popularity.desc', this.state.actualPage).then(movies => {
            this.setState({
                 popular: this.state.popular.concat(movies),
                 filtroPopular: this.state.popular.concat(movies),
                 loaderPopular: false,
                 actualPage: this.state.actualPage + 1
             })
        })
    }

    handleResetFilter(e){
        this.setState({
            filtroValue: '',
            filtroPopular: this.state.popular
        })
    }

    render() {
        return (
            <div className="home-container">
                <div className='reset-button'>
                    <input type='text' className="input-buscador" placeholder="Filtra película..." onChange= {(e)=>this.handleFilterChange(e)}value={this.state.filtroValue}/>
                    <Button onClick={(e)=>this.handleResetFilter(e)} className="dark">
                        Reset Filter
                    </Button>
                </div>
                <div className="movies-section">
                    <ListaPeliculas title={"Popular Movies"} loader={this.state.loaderPopular} peliculas={this.state.filtroPopular}/> 
                </div>
                <div className='load-more-container'>
                    <Button onClick={(e)=>this.handleLoadMore(e)} className="dark">
                        Cargar Mas
                    </Button>
                </div>
            </div>
        )
    }
}

export default PopularMovies;