import "./HeroSectionContainer.css";

const HeroSectionContainer = ( props ) => {
  return (
    <div className="heroContainer">
      <h1>Bienvenidos a {props.greeting}</h1>
      <p className="subText">{props.subText}</p>
    </div>
  );
};

export default HeroSectionContainer;
