import React from "react";
import { useState } from 'react'
function Counter(){
    let [counter, setCounter] = useState(0)
  const addValue=()=>{
    setCounter(counter+1)
  }
  const removeValue=()=>{
    if (counter>0){
      setCounter(counter-1)
    }
    else{
      setCounter(counter)
    }
    } 
  
  return (
    <>
    <h1>Counter Project</h1>
    <h2>counter Value {counter}</h2>
    <button onClick={addValue}>Add Value {counter}</button>
    <button onClick={removeValue}>Remove Value {counter}</button>
    </>
      
  )
}

export default Counter;





