import React from "react";
import './like.css';

import higher from "./higherOrderComponents";

class Comment extends React.Component{
    render(){
        return(

            <div>
                <br/>
                <div className="b">
                <button onClick={this.props.handleClick}>Comments</button>
                <>
                {this.props.counterValue}
                </>
                </div>
            </div>
        )
    }
}

const Enhancecomment=higher(Comment);

export default Enhancecomment;