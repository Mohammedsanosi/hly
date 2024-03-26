import React from "react";
import { Carddata } from "../Data/data";
import Card from "./card.component";
const CreateCard =() => {
    return(
    <div>
    {
        Carddata.map(Carddata =>(
            <Card Hotelname ={Carddata.name} content ={Carddata.describtion} image={Carddata.image}/>
    ))}
    </div>
    )
}
export default CreateCard ;