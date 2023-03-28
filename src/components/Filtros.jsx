import { useState, useEffect } from "react";
import { categorias, generarId } from "../helpers";

const Filtros = ({ filtro, setFiltro }) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label>Filtrar Gastos</label>
          <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
            <option value="">-- Todas las Categorias --</option>
            {categorias.map((categoria) => (
              <option value={Object.entries(categoria)[0][0]} key={generarId()}>
                {Object.entries(categoria)[0][1]}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
