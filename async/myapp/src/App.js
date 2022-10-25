
import { useEffect, useState } from 'react';
import './App.css';
// http://localhost:8080/data
function App() {
  const [user,setUser]=useState([])
  const [text,setText]=useState("")

  useEffect(()=>{
    getdata();
  },[])
  const getdata= ()=>
   {
       fetch("http://localhost:8080/data")
       .then((res)=>res.json())
       .then((res)=>setUser(res))
       .catch((err)=>{console.log(err)})
      // setUser(data)
      //  console.log(data)
   }
  return (
    <div className="App">

     <input onChange={(e)=>setText(e.target.value)} type="text" placeholder='Enter Entity'  />
     <button onClick={()=>{
      const payload={
        name:text,
        status:false

      };
      fetch("http://localhost:8080/data",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(payload)
      }).then(()=>{
        getdata()
      })
     }} >Add</button>

     {user.map((ele)=>{
      return(<p key={ele.id} >
      {ele.name}
      </p>)
     })}
    </div>
  );
}

export default App;
