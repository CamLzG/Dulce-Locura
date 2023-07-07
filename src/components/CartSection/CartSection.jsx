import "./CartSection.css";
import CartItem from "./CartItem/CartItem";
import CheckOut from "./CheckOut/CheckOut";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const CartSection = () => {
  const { items } = useContext(CartContext);

  return (
    <div className="cartContainer" data-aos="fade-left">
      <h2 className="CartTitle">Información de tu carrito:</h2>
      {items &&
        items.map((item, key) => {
          return <CartItem {...item} key={key} />;
        })}
      <div>
        {items.length > 0 ? (
          <div>
            <p className="cartT">
              Total de la compra: ${" "}
              {items.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            </p>
            <CheckOut />
          </div>
        ) : (
          <p className="cartT">¡Agrega productos a tu carrito!</p>
        )}
      </div>
    </div>
  );
};

export default CartSection;
