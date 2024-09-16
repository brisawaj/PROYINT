import React from 'react';
import { Component} from 'react';
import DetallePelicula from '../../components/DetallePelicula/DetallePelicula';

const peliculaID = 533535;


class ScreenDetallePelicula extends Component {
    constructor (props){
        super(props);
        this.state = {/* data:null */}
    }

    componentDidMount() {
        // console.log(this.props.match.params.id)
    }
    
    render(){
        return(
            <div>
                <DetallePelicula id={peliculaID}/>
            </div>
        )
    }
}

export default ScreenDetallePelicula;