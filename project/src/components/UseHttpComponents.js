import React, { Component } from 'react'

import axios from "axios";

class UseHttpComponents extends Component {
    
    constructor(props){
      super(props)

      this.state={
        posts:[]
      }
    }


    componentDidMount(){

        axios.get("https://jsonplaceholder.typicode.com/posts")

        .then(response => {

          console.log(response)

          this.setState({posts:response.data})
  
        })

        .catch(error =>{

          console.log(error,"error 404")

          this.setState({errorMessage:"The problem from fetching API"})
        })
    }
  render() {
    const {posts,errorMessage}=this.state
    return (
      <div>
      UseHttpComponents

      {
        posts.length? posts.map(posts=><div key={posts.id}>
          <h1>"Id":{posts.id}</h1>
          <h1>"title":{posts.title}</h1>
        </div>):null
      }
      {
        errorMessage? <div>
          <h1>{errorMessage}</h1>
        </div>:null
      }

     
      </div>
    )
  }
}
export default UseHttpComponents;