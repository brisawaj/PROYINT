import { Component } from 'react';
import ListaPeliculas from "../../components/ListaPeliculas/ListaPeliculas";
import "./Top.css"
import { getMovies } from '../../utils/movie';
import Button from '../../components/Button/Button';

class Top extends Component {
    constructor() {
        super()
        this.state = { top: [], filtroTop: [], filtroValue:'', loaderTop: true }
    }

    componentDidMount() {
       getMovies('vote_average.desc').then(movies => {
           this.setState({
                top: movies,
                filtroTop: movies,
                loaderTop: false,
            })
       })
    }

    handleFilterChange(e){
        const userValue= e.target.value
        this.setState({
          filtroValue: userValue,
          filtroTop: this.state.top.filter(movie => movie.title.toLowerCase().includes(userValue.toLowerCase()))
        })
      }

    render() {
        return (
            <div className="home-container">
                <input type='text' className="input-buscador" placeholder="Filtra película..." onChange= {(e)=>this.handleFilterChange(e)}value={this.state.filtroValue}/>
                <div className="movies-section">
                    <ListaPeliculas title={"Top Rated Movies"} loader={this.state.loaderTop} peliculas={this.state.filtroTop}/> 
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