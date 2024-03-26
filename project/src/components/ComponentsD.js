import React, { useContext } from "react";

import { UserContext } from "./ComponentA";

function ComponentsD(){

    const user= useContext(UserContext);
    return(
        <div>

            <h1>Components D</h1>

            <h2>{user}</h2>
        </div>

    )

} 

export default ComponentsD;