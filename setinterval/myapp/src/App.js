
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [count,setCount]=useState(10);

  useEffect(()=>{
    setInterval(()=>{
        setCount((prev)=>{
           if(prev<=0)
           {
            return 0
           }
           return prev-1
        })
    },300)
  },[])

  return (
    <div className="App">
     <h1>Timer : {count}</h1>
    </div>
  );
}

export default App;
