import "./Home.css"
import UnaPelicula from "../../components/UnaPelicula/UnaPelicula";
import react, { Component } from 'react';
import Loader from "../../components/Loader/Loader";
class Home extends Component {
    constructor() {

        super()
        this.state = { popular: [], topRated: [], loaderTop: true, loaderPopular: true }

    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=8942348488014765a582e61cb7357525')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    popular: data.results.slice(0, 5),
                    loaderPopular: false
                })
            })
            .catch(e => console.log(e))

        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=8942348488014765a582e61cb7357525')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    topRated: data.results.slice(0, 5),
                    loaderTop: false
                })
            })
            .catch(e => console.log(e))
    }

    render() {
        return (
            <div>
                <div className="popular-container">
                <h1>Popular Movies</h1>
                    {
                        this.state.loaderPopular ?
                            <Loader /> :
                            this.state.popular.map((Peli, idx) => <UnaPelicula data={Peli} key={idx}></UnaPelicula>)
                    }
                </div>
                <div className='topRated-container'> 
                    <h1>Top Rated Movies</h1>
                    {
                        this.state.loaderTopRated ? 
                            <Loader /> : 
                            this.state.topRated.map((Peli, idx) => <UnaPelicula data={Peli} key={idx}></UnaPelicula>)
                    }
                </div>
            </div>
        )
    }
}

export default Home;