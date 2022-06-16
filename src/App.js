import React from "react"; 
const App = () =>{ 
  var a ="shashi" 
  const clickHandler = () =>{
    console.log("clicked") 
    a = "kanth";
    return a;
  }
  return(
    <div>
      <h1>hello {a}</h1> 
      <button onClick={clickHandler}>click here</button>
    </div>
  )
}
export default App;