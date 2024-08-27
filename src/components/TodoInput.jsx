import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../Features/todo/todoSlice.jsx' 

const TodoInput = () => {

    const [text, setText] = useState("")
    const dispatch = useDispatch()

    const handleAddTodo = ()=>{
        dispatch(addTodo(text))
        setText("")
    }

  return (
    <div>
        <input
            type='text'
            value={text}
            onChange={(e)=> setText(e.target.value)}
            placeholder='Add New Todo'
        />
        <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}

export default TodoInput