import imgCarrito from "../../assets/img/NavBar/carrito-de-compras.png"
import "./CartWidget.css"

const CartWidget = () =>{
    return(
        <>
        <img src= { imgCarrito } alt="Carrito" className="imgCarrito"/>
        <p className="contadorCarrito">0</p>
        </>
    )
}

export default CartWidget;