import React from 'react'
import { useState } from 'react'

const TodoInput = ({getData}) => {
    

    const [text,setText]=useState("")
    
  return (
    <div>
      <input  onChange={(e)=>{
        setText(e.target.value)
      }} type="text" placeholder='Enter Entity' />
      <button onClick={()=>{getData(text)}} >Add</button>
      {/* {text} */}
    </div>
  )
}

export default TodoInput
