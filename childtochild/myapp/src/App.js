// import { useState } from "react";
// import "./styles.css";

export default function App() {
  
  // const use=useState("")

  function getData(data)
  {
   
    
    return(<>
    <p> hello {data}</p>
    <Second  msg={data}/>
    </>)
    
  }
  return (
    <div className="App">
      <First func={getData}/>
     
    </div>
  );
}


function First({func})
{
  let name="ravit"
  return(
    <>
    hello {func(name)}
    </>
  )
}


function Second({msg})
{
  return(
    <>
    bye Rahul & {msg}
    </>
  )
}