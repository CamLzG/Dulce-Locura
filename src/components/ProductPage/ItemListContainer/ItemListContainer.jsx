import { useState, useEffect } from "react";
import CardProducts from "../../CardProducts/CardProducts.jsx";
import "./ItemListContainer.css";
import { Link } from "react-router-dom";
import { db } from "../../../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";


const ItemListContainer = (props) => {
  const [products, setProductos] = useState([]);
    
  useEffect(() => {
    const getProducts = async () => {
      let q = null 
      if (props.selectedCategory != null) {
         q = query(collection(db, "Productos"), where ("categoriaId", "==", props.selectedCategory ));
      } else {
         q = query(collection(db, "Productos"));
      }
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id});
      });
      setProductos(docs);
    };
    getProducts();
  }, [props.selectedCategory]);

  return (
    <div>
      <div className="cardProducts">
        {products && products.map((item, key) => {
            return (<Link to={`/item/${item.id}`} key={key}><CardProducts {...item}/></Link>)
          })}
      </div>
    </div>
  );
};

export default ItemListContainer;
