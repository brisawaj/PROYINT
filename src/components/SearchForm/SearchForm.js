import React, { Component } from "react";
import "./SearchForm.css";


class SearchForm extends Component {
  constructor(props){
    super(props)
    this.state = {query: ""}
  }

  render(){
    return (
      <div className="reset-button">
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.history.push('/busqueda', {query: this.state.query})
        }}>
          <input
            className="input-buscador"
            type="text"
            onChange= {(e)=>{
                this.setState({
                  query: e.target.value
              })
            }}
            value={this.state.query}
            placeholder="Buscar película..."
          />
          <i className="fas fa-search icono-buscador"></i>
        </form>
      </div>
    );
  }
}
export default SearchForm;

