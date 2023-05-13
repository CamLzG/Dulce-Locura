import React from "react";
import "./ItemListContainer.css"

class ItemListContainer extends React.Component{
    render(){
        return(
            <div className="listContainer">
                <h1>Bienvenidos a {this.props.greeting}</h1>
                <p className="subText">{this.props.subText}</p>
            </div>
        )
    }
}

export default ItemListContainer;