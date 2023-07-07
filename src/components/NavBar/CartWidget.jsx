import "./CartWidget.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () =>{
    const {items} = useContext(CartContext);

    return(
        <div>
        <Link to='/cart'><img src="https://firebasestorage.googleapis.com/v0/b/dulce-locura.appspot.com/o/General%2Fcarrito-de-compras.png?alt=media&token=bc0f25ad-d518-445f-a1bd-255c7312fc04" alt="Carrito" className="imgCarrito"/>
        <p className="contadorCarrito">{items.length}</p></Link>
        </div>
    )
}

export default CartWidget;