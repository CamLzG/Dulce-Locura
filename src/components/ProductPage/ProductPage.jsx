import { useState } from "react";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ProductsCategory from "./ProductsCategory/ProductsCategory";
import "./ProductPage.css"

const ProductPage = () => {
    const [idCategoria, setIdCategoria] = useState(null)

    return(
        <section className="productsContainer">
            <ProductsCategory selectCategory={setIdCategoria} idCategoria={idCategoria}/>
            <ItemListContainer selectedCategory={idCategoria}/>   
        </section>
    )
}

export default ProductPage;

