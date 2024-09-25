import { Component } from 'react';
import ListaPeliculas from "../../components/ListaPeliculas/ListaPeliculas";
import "./Top.css"
import { getMovies } from '../../utils/movie';
import Button from '../../components/Button/Button';

class Top extends Component {
    constructor() {
        super()
        this.state = { top: [], filtroTop: [], filtroValue:'', actualPage: 1, loaderTop: true }
    }

    componentDidMount() {
       getMovies('vote_average.desc', this.state.actualPage).then(movies => {
           this.setState({
                top: movies,
                filtroTop: movies,
                loaderTop: false,
                actualPage: this.state.actualPage + 1
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

      handleLoadMore(e){
        getMovies('vote_average.desc', this.state.actualPage).then(movies => {
            this.setState({
                 top: this.state.top.concat(movies),
                 filtroTop: this.state.top.concat(movies),
                 loaderTop: false,
                 actualPage: this.state.actualPage + 1
             })
        })
    }

    handleResetFilter(e){
        this.setState({
            filtroValue: '',
            filtroTop: this.state.top
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
                    <ListaPeliculas title={"Top Rated Movies"} loader={this.state.loaderTop} peliculas={this.state.filtroTop}/> 
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

export default Top;