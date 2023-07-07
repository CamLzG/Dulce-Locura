import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="containerNavBar">
      <Link to="/" className="logo">
        Dulce Locura
      </Link>
      <div className="navList">
        <ul>
          <Link to="/category" className="navLi">
            Productos
          </Link>
        </ul>
        <CartWidget />
      </div>
    </div>
  );
};
export default NavBar;
