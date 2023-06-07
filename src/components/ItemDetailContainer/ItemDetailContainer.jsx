import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardProducts from "../CardProducts/CardProducts.jsx";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios("/products.json").then((res) => {
      setProduct(res.data.find((item) => item.id == id));
    });
  }, [id]);

  return (
    <div>
      <div className="cardProducts">
         <CardProducts {...product} agregar= {true}/>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
