import "./CardProducts.css";
import { useState , useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import swal from 'sweetalert';

const CardProducts = (props) => {
  const [cantidad, setCantidad] = useState(1);
   const {items , setItems} = useContext(CartContext);

  const addCart = () => {
    if (items.some(item => item.itemId == props.id)) {
      const updateArray = items.map(item => {
        if (item.itemId == props.id) {
          return({...item , quantity:item.quantity + cantidad})
        }
        return(item)
      })
      setItems(updateArray);
      swal("Agregado al carrito", {
        icon: "success",
        buttons: false,
        timer: 1500,
      });
    } else {
      setItems([...items, {itemId:props.id , img:props.img , name:props.name , price:props.price , quantity:cantidad}])
      swal("Agregado al carrito",{
        icon: "success",
        buttons: false,
        timer: 1500,
      });
    }
    
  }

  const incrementar = () => {
    setCantidad(cantidad + 1);
  };
  const disminuir = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  return (
    <div className="cardContainer">
      <div className="cardImg">
        <img src={props.img} alt="producto" />
      </div>
      <div className="cardDescription">
        <h3 className="cardName">{props.name}</h3>
        <p className="cardprice">$ {props.price} c/u.</p>
      </div>
      {props.agregar && (
        <div>
          <p className="cardTextDesc">{props.description}</p>
          <div className="sectionAdd">
            <button className="btnAdd" onClick={disminuir}>
              -
            </button>
            <p className="inputCantidad">{cantidad}</p>
            <button className="btnAdd" onClick={incrementar}>
              +
            </button>
            <button className="btnAdd" onClick={addCart}>Agregar</button>
          </div>
          <Link to="/category"><button className="btn2">Seguir comprando</button></Link>
        </div>
      )}
    </div>
  );
};

export default CardProducts;
