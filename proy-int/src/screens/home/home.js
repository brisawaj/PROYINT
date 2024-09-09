import "./home.css"
import UnaPelicula from "../../components/UnaPelicula/unaPelicula";
import react, {Component} from 'react';
class Home extends Component {
    constructor(){
    
        super()
        this.state={popular:[],toprated:[]}
        
    }
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=8942348488014765a582e61cb7357525')
        .then( res=>res.json()) 
        .then( data=>{console.log(data)
        this.setState({
            popular:data.results
        })})
        .catch(e=> console.log(e))
fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=8942348488014765a582e61cb7357525')
.then( res=>res.json()) 
.then( data=>{console.log(data)
this.setState({
    toprated:data.results
})})
.catch(e=> console.log(e))


    }
    render(){
        return(
            <div> {this.state.popular.map((Peli,idx)=><UnaPelicula data={Peli}key={idx}></UnaPelicula>)} 
            {this.state.toprated.map((Peli,idx)=><UnaPelicula data={Peli}key={idx}></UnaPelicula>)}</div>
        )
    }
}
  
  export default Home;