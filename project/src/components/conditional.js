import React from "react";

import './style.css';


class Conditional extends React.Component{
    constructor(){
        super()

        this.state={
            loggedin:true,
        }
    }

    render(){

        if(this.state.loggedin){
            return(
            <div id="element">
                <h1>student login the page and enter the page</h1>
            </div>
            )
        }else{
            return(
                <div className="func">
                    <h1> student should login the page</h1>
                </div>
            )
        }
    }
}

export default Conditional;