import "./UnaPelicula.css"
import react, {Component} from 'react';

class UnaPelicula extends Component {
    componentDidMount(){
        console.log('acaaaaa', this.props.data)
    }
    render(){
        return(
            <div> 
                <h2>{this.props.data.name || this.props.data.title} </h2>
                <p>{this.props.data.popularity}</p>
            
            </div>
        )
    }
}
  
  export default UnaPelicula;