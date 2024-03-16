import { useState } from "react";

function Update(){
    const [bike, setBike] = useState("Hero honda");

    return <div><h1>{bike} is an old model bike in good condition price at 25000</h1>
           
           <button onClick={()=>setBike("passion pro")}> Bike </button>

           </div>
}

export default Update;