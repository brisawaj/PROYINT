import React from 'react';
import { Component} from 'react';
import DetallePelicula from '../../components/DetallePelicula/DetallePelicula';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';


class ScreenDetallePelicula extends Component {
    constructor (props){
        super(props);
        this.state = {}
    }

    
    
    render(){
        const query = new URLSearchParams(this.props.location.search);
        const mediaType = query.get('media_type')|| 'movie';
        return(
            <div>
                <DetallePelicula id={this.props.match.params.id} mediaType={mediaType}/>
            </div>
        )
    }
}

export default withRouter(ScreenDetallePelicula);