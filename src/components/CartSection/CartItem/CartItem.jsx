import "./CartItem.css";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";

const CartItem = (props) => {
  const [cantidad, setCantidad] = useState(props.quantity);
  const incrementar = () => {
    setCantidad(cantidad + 1);
    updateQuantity(cantidad + 1);
  };
  const disminuir = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
      updateQuantity(cantidad - 1);
    }
  };

  const { items, setItems } = useContext(CartContext);

  const removeItem = () => {
    const remove = items.filter((item) => item.itemId != props.itemId);
    setItems(remove);
  };

  const updateQuantity = (cantidad) => {
    const updateArray = items.map(item => {
      if (item.itemId == props.itemId) {
        return({...item , quantity:cantidad})
      }
      return(item)
    })
    setItems(updateArray);
  }

  useEffect(() => {
    setCantidad(props.quantity)
  },[props.quantity])

  return (
    <div className="itemsCardConteiner">
      <p
        className="remove"
        onClick={() => {
          removeItem();
        }}
      >
        x
      </p>
      <img src={props.img} alt="imagen del producto" />
      <p className="itemName">{props.name}</p>
      <div className="sectionAdd">
        <button className="btnAdd" onClick={disminuir}>
          -
        </button>
        <p className="inputCantidad">{cantidad}</p>
        <button className="btnAdd" onClick={incrementar}>
          +
        </button>
      </div>
      <p className="itemName">${props.price * cantidad}</p>
    </div>
  );
};

export default CartItem;
