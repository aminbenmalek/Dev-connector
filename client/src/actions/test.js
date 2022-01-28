import React, { Component,useState } from "react";


export const App=()=>{
  const[count,setCount]=useState(0);
      
      const incrementCount=(()=>{setCount(count+1)})
      const decrementCount=(()=>{setCount(count-1)})
  
    
  
  
    return (
      <div>
        <div>Count: {count}</div>
        <button onClick={incrementCount}>+1</button>
        <button onClick={decrementCount}>-1</button>
      </div>
    );
  }
