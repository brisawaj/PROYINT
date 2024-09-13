import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    navigate(`/busqueda/${query}`);
    setQuery("");
  };

  const actualizarValor = (evento) => {
    setQuery(evento.target.value);
  };

  return (
    <div className="contenedor-buscador">
      <form onSubmit={manejarEnvio}>
        <input
          className="input-buscador"
          type="text"
          onChange={actualizarValor}
          value={query}
          placeholder="Buscar película..."
        />
        <i className="fas fa-search icono-buscador"></i>
      </form>
    </div>
  );
};

export default SearchForm;

