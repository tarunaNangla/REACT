import React from 'react'
import { useState } from 'react'
import TodoInput from './TodoInput'

const Todo = () => {

    const [user,setUser]=useState([])
    const getData=(data)=>{
        setUser([...user,data])
    }
  return (
    <div>
      <h1>TODO</h1>
      <TodoInput getData={getData}/>
      {user.map((ele)=>{
        return(<p>{ele}</p>)
      })}
    </div>
  )
}

export default Todo
