import "./HomePage.css"
import HeroSection from "./HeroSection/HeroSectionContainer.jsx";
import AboutUs from "./AboutUs/AboutUs";
import ProductsPresentation from "./ProductsPresentation/ProductsPresentation";
import SMSection from "./SMSection/SMSection";

const HomePage = () => {
    return(
        <div className="homePageContainer">
            <HeroSection greeting= "Dulce Locura" subText="Emprendimiento de productos dulces y salados"/>
            <AboutUs/>
            <ProductsPresentation/>
            <SMSection/>
        </div>
    )
}

export default HomePage;