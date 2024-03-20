import React from "react";
import './like.css';
import higher from "./higherOrderComponents";

class Like extends React.Component{
    render(){
        return(

            <div>
                <img src="./night.jpg"  alt="/"></img>
                <br/>
                <div className="a">
                <button onClick={this.props.handleClick}>Likes
                <i class="fa-solid fa-thumbs-up"></i> 
                </button>
                              
               <>
                {this.props.counterValue}
                </>
                </div>
            </div>
        )
    }
}

const Enhancelike=higher(Like);

export default Enhancelike;


