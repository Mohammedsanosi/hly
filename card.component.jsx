import React from "react";
import "./Card.css" ;
const Card =(props) => {
    return (
        <div className="container">
        <div style={{
          backgroundImage : `url(${props.image})`
        }}></div>
        <div className="Card"> 
         
            <div className="bottom" >
            <h1>{props.Hotelname}</h1>
            <p>{props.content}</p>
             </div>
        </div>
        </div>
    )  
}
export default Card ;