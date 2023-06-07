import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useEffect , useState} from "react";
import axios from "axios";

const NavBar = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios("/categorias.json").then((res) => {
      setCategory(res.data);
    });
  }, []);
  return (
    <div className="containerNavBar">
      <Link to="/" className="logo">
        Dulce Locura
      </Link>
      <ul className="navList">
          {category &&
            category.map((item, key) => {
              return (
                <Link to={`/category/${item.id}`} className="navLi" key={key}>
                  {item.nombre}
                </Link>
              );
            })}
      </ul>
      <CartWidget />
    </div>
  );
};
export default NavBar;
