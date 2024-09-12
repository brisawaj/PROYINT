import "./UnaPelicula.css"
import react, {Component} from 'react';
class UnaPelicula extends Component {
    constructor(props){
    
        super(props)
        this.state={data:props}
        
    }
    componentDidMount(){
    }
    render(){
        console.log(this.state.data)
        return(
            <div> 
                <h2>{this.state.data.data.title} </h2>
                <p>{this.state.data.data.popularity}</p>
            

            
            </div>
        )
    }
}
  
  export default UnaPelicula;