import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardProducts from "../CardProducts/CardProducts.jsx";
import "./ItemListContainer.css";
import { Link } from "react-router-dom";


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  let { id } = useParams();
    
  useEffect(() => {
    axios("/products.json").then((res) => {
      if (id != undefined) {
        setProducts(res.data.filter( item => item.idCategoria == id));
      } else {
        setProducts(res.data);
      } 
    }); 
  }, [id]);

  return (
    <div>
      <div className="cardProducts">
        {products && products.map((item, key) => {
            return <Link to={`/item/${item.id}`} key={key}><CardProducts {...item}/></Link>
          })}
      </div>
    </div>
  );
};

export default ItemListContainer;
