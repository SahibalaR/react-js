import React, { useContext } from 'react'


import { UserContext } from './ComponentA'



function ComponentCUseContextPractice() {

    const User= useContext(UserContext);

  return (
    <div className='box' >
        
        <h1>Component C</h1>
        <h2>{User}</h2>

    

    </div>
  )
}

export default ComponentCUseContextPractice