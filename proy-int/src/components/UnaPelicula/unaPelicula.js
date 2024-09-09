import "./unaPelicula.css"
import react, {Component} from 'react';
class unaPelicula extends Component {
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
                <h1>{this.state.data.data.title} </h1>
                <p>{this.state.data.data.popularity}</p>
            

            
            </div>
        )
    }
}
  
  export default unaPelicula;