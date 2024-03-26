import { useState } from "react";
import Carddata from "../Data/data" ;
const Searchbox = ()=> {
    const [Searchfield,setSearchfield] = useState('') ;
    const filteredHotels= Carddata.filter(Carddata=>
        Carddata.name.tolowerCase().includes(Searchfield.toLocaleLowerCase()))
    return (
    <div>
     <input
     type="search"
     placeholder="search Hotels"
     onChange={e=> setSearchfield({Searchfield:e.target.value})} />
    </div> )
}
export default Searchbox ;