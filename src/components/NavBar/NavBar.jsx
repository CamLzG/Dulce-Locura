import "./NavBar.css"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
  <div className="containerNavBar">
    <a href="" className="logo">Dulce Locura</a>
    <ul>
      <li><a href="">Nosotros</a></li>
      <li><a href="">Productos</a></li>
      <li><a href="">Contacto</a></li>
    </ul>
    <CartWidget/>
  </div>  
  )
};
export default NavBar;
