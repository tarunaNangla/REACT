
import './App.css';
import {useEffect, useState} from 'react'

// https://jsonplaceholder.typicode.com/users -fake data

function App() {
  const [user,setUser]=useState([])
  

  useEffect(()=>{
    // console.log("hello")
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((res)=>setUser(res))
    .catch((error)=>{console.log(error)})
  })

  return (
    <div className="App">
    <div className="grid">
      {
        user.map((ele)=>{
          console.log(ele);
          return(
            <div key={ele.id}>
              <p>{ele.name}</p>
              <p>{ele.username}</p>
              <p>{ele.email}</p>
              <p>{ele.phone}</p> 
              </div>
          )
        })
      }
    </div>
    </div>
  );
}

export default App;
