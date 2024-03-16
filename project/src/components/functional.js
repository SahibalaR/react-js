import React from "react";

class Message extends React.Component{
    constructor(){
      super()
      this.state= {
        counter:0
      }
    }

    

    render(){
      return(
           <div>
             <button onClick={()=>{
              this.setState((currentState)=>{
                return{
                  counter:currentState.counter+1

                }

              })
            }
          }> count </button>
             <span>{this.state.counter}</span>
           </div>
      )
    }
     
    }

    export default Message; 
      
    
