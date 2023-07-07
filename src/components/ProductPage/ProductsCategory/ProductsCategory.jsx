import { useState, useEffect } from "react";
import { db } from "../../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./ProductsCategory.css"

const ProductsCategory = (props) => {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const q = query(collection(db, "Categorias"));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setCategorys(docs);
    };
    getCategory();
  }, []);

  return (
    <aside className="categoryContainer">
      <p>Categorias:</p>
      <Link to="/category"><div onClick={() => {props.selectCategory(null);}}>
        <p className= {props.idCategoria == null ? "selectedCategory" : ""}>Todos</p>
      </div></Link>
      {categorys &&
        categorys.map((item, key) => {
          return (
            <Link to= {`/category/${item.name}`} key={key}><div
              onClick={() => {
                props.selectCategory(item.id);
              }}
            >
              <p className= {props.idCategoria == item.id ? "selectedCategory" : ""}>{item.name}</p>
            </div>
            </Link>
          );
        })}
    </aside>
  );
};

export default ProductsCategory;
