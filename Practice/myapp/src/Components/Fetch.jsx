import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
// http://localhost:8080/data
const Fetch = () => {

    const [user,setUser]=useState([]);
    const [text,setText]=useState("");
    const [page,setPage]=useState(1)

   useEffect(()=>{
    getdata()
   },[page])


   const getdata=()=>{
    fetch(`http://localhost:8080/data?_page=${page}&_limit=3`)
    .then((res)=>res.json())
    .then((res)=>setUser(res))
    .catch((error)=>{console.log(error)})
   }

  return (
    <div>

     <input onChange={(e)=>setText(e.target.value)} type="text" placeholder='Enter Data' />
     <button onClick={()=>{
        const payload={
            name:text,
            status:false
        }
        fetch("http://localhost:8080/data",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(payload)
        }).then(()=>getdata())
    
     }} >Add</button>
     {user.map((ele)=>{
        return(

        
            <p key={ele.id}>{ele.name}</p>
        )
     })}
    
    <button onClick={()=>setPage(page-1)} >Pre</button><button onClick={()=>setPage(page+1)}>Next</button>
    </div>
  )
}

export default Fetch
