
import './App.css';
import {useState} from 'react'
function App() {
 const [count,setCount]=useState(0)




  return (
    <div className="App">
     <h1>Counter {count}</h1>
    
     <button onClick={()=>setCount(count+1)} >INC</button>
     <button onClick={()=>{
      if(count<=0)
      {
        return
      }
      setCount(count-1)
     }}>DEC</button>

     
    </div>
  );
}

export default App;
