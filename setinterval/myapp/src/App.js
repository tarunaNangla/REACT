
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [count,setCount]=useState(10);

  const stop=useEffect(()=>{
    setInterval(()=>{
        setCount((prev)=>{
          console.log(prev)
           if(prev<=0)
           {
            clearInterval(stop)
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
