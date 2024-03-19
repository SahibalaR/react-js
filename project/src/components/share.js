import React from "react";
import './like.css';

import higher from "./higherOrderComponents";

class Share extends React.Component{
    render(){
        return(

            <div>
                <br/>
                <div className="c">
                <button onClick={this.props.handleClick}>Shares</button>
                <>
                {this.props.counterValue}
                </>
                </div>
            </div>
        )
    }
}

const Enhanceshare=higher(Share);

export default Enhanceshare;