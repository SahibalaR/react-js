import React,{useState,createContext}from "react";
import ComponentBUseContextPractice from "./ComponentB";
import ComponentCUseContextPractice from "./ComponentsC";
import ComponentsD from "./ComponentsD";

export const UserContext = createContext(); 

function ComponentAUseContextPractice() {

  const [user, setUser] = useState("Kishore");

  return (
    <div className='box' >
        
        <h1>Component A</h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value = {user}>
          <ComponentBUseContextPractice user = {user}/>
          <ComponentCUseContextPractice myname={user}/>
          <ComponentsD name={user}/>
        </UserContext.Provider>
        

    </div>
  )
}

export default ComponentAUseContextPractice;