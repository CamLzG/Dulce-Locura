import { useState, useEffect } from "react";
import { db } from "../../../firebase/firebaseConfig";
import { collection, query, getDocs, where, documentId } from "firebase/firestore";
import CardProducts from "../../CardProducts/CardProducts.jsx";
import { useParams} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading , setLoading] = useState(true)
  const { id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "Productos"), where (documentId(), "==", id ));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id});
      });
      setProduct(docs);
      setLoading(false)
    };
    getProducts();
  }, [id]);
  
  return (
    <div>{!loading && (<div className="cardProducts" data-aos="fade-down" data-aos-duration="1000">
    {product.length > 0 ? product.map((item, key) => {
          return (<CardProducts {...item} key={key} agregar= {true}/>)
        }): <p className="cartT">El producto que buscas no existe.</p>}
    </div>)}
    </div>
  );
};

export default ItemDetailContainer;
