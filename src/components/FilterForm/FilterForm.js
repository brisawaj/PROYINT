import React, { Component } from "react";
import "./FilterForm.css";

class FilterForm extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div className="search-form">
        <form onSubmit>
          <input
            className="input-buscador"
            type="text"
            placeholder="Buscar película..."
          />
          <i className="fas fa-search icono-buscador"></i>
        </form>
      </div>
    );
  }
}
export default FilterForm;
