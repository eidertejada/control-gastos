import React from "react";
import CerrarBtn from "../img/cerrar.svg";

const Modal = ({ setModal, animarModal, setAnimarModal }) => {
  const ocultarModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const categorias = [
    { ahorro: "Ahorro" },
    { comida: "Comida" },
    { casa: "Casa" },
    { gastos: "Gastos" },
    { ocio: "Ocio" },
    { salud: "Salud" },
    { suscripciones: "Suscripciones" },
  ];

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
      </div>

      <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
        <legend>Nuevo Gasto</legend>

        <div className="campo">
          <label htmlFor="nombre"> Nombre Gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el Nombre del Gasto"
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad"> Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Añade la Cantidad del Gasto"
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria"> Categoria</label>
          <select id="categoria">
            <option value="">-- Seleccione --</option>
            {categorias.map((categoria) => (
              <option value={Object.entries(categoria)[0]}>
                {Object.entries(categoria)[0][1]}
              </option>
            ))}
          </select>
        </div>

        <input type="submit" value={"Añadir Gasto"} />
      </form>
    </div>
  );
};

export default Modal;
