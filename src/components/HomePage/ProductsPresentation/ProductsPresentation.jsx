import { useEffect, useState } from "react";
import "./ProductsPresentation.css";
import { db } from "../../../firebase/firebaseConfig";
import { collection, query, getDocs, limit } from "firebase/firestore";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link } from "react-router-dom";
AOS.init();

const ProductsPresentation = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "Productos"), limit(4));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push(doc.data().img);
      });
      setProductos(docs);
    };
    getProducts();
  }, []);

  return (
    <section className="preContainer">
        <h2 className="preText" data-aos="fade-up">Algunos de nuestros productos:</h2>
      <div className="preImgContainer" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out">{productos && productos.map((img , key)=>{
        return(<img className="imgPresentation" src={img} alt="Imagenes de productos" key={key} />)
      })}</div>
      <Link to="/category"><button className="btn" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">Ver todos</button></Link>
    </section>
  );
};

export default ProductsPresentation;
