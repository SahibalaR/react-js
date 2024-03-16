import React from "react";

import Daughter from "./daughter component";

class Mother extends React.Component{

    constructor(){
        super()

        this.state={
            content: 'Women Day'
        }
        //Binding the welcome function to the current instance of MyComponent
        this.welcome=this.welcome.bind(this)
    }

    welcome(){
        alert(`Hello ${this.state.content}`);
    }

    render(){

        return(
            <div>
                <Daughter welcome={this.welcome}/>
            </div>
        )

    }
}

export default Mother;