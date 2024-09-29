import React from 'react';
import { Component} from 'react';
import DetallePelicula from '../../components/DetallePelicula/DetallePelicula';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';


class ScreenDetallePelicula extends Component {
    constructor (props){
        super(props);
        this.state = {/* data:null */}
    }

    
    
    render(){
        return(
            <div>
                <DetallePelicula id={this.props.match.params.id}/>
            </div>
        )
    }
}

export default withRouter(ScreenDetallePelicula);