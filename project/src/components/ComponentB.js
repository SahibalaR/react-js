import React, { useContext } from 'react'


import { UserContext } from './ComponentA'



function ComponentBUseContextPractice() {

    const User= useContext(UserContext);

  return (
    <div className='box' >
        
        <h1>Component B</h1>
        <h2>{User}</h2>

    

    </div>
  )
}

export default ComponentBUseContextPractice