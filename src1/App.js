import "./App.css";
import { useState,useEffect } from "react";

// App is a component
// useState and useEffect are hooks 
const App = () => {
  const [counter,setCounter] =useState(0);


  // useEffect(()=>{
  //   // counter =10 would return error: Never modify state manually 
  //   // when add [] in useEffect: it would only happen at start 
  //   setCounter(10);
  // },[])

  useEffect(()=>{
    // if [counter]: it would happen whenever the counter change 
    alert('You have changed the counter to '+counter)
  },[counter])

  return (
    <div className="App">
      <button onClick={()=>{setCounter(counter-1)}}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=>{setCounter(counter+1)}}>+</button>
      <h1></h1>
      <button onClick={()=>{setCounter(0)}}>Back to Default</button>

    </div>
  );
};
export default App;
