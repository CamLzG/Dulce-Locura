import "./CardProducts.css";
import { useState } from "react";

const CardProducts = (props) => {
  const [cantidad , setCantidad] = useState(1);
  const incrementar = () =>{
    setCantidad(cantidad + 1)
  } 
  const disminuir = () =>{
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  } 
  return (
    <div className="cardContainer">
      <div className="cardImg">
        <img src={props.URLimg} alt="producto" />
      </div>
      <div className="cardDescription">
        <h3 className="cardName">{props.nombre}</h3>
        <p className="cardprice">$ {props.precio} c/u.</p>
      </div>
      {props.agregar && (
        <div className="sectionAdd">
          <button className="btnAdd" onClick={disminuir}>-</button>
          <p className="inputCantidad">{cantidad}</p>
          <button className="btnAdd" onClick={incrementar}>+</button>
          <button className="btnAdd">Agregar</button>
        </div>
      )}
    </div>
  );
};

export default CardProducts;
