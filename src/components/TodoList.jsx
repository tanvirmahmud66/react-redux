import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import {selectTodo} from '../Features/todo/todoSlice.jsx'
import TodoItem from './TodoItem.jsx';

const TodoList = () => {

    const todos = useSelector(selectTodo)
    console.log(todos)

  return (
    <ul>
        {todos.map((todo)=>(
            <TodoItem key={todo.id} todo={todo}/>
        ))}
    </ul>
  )
}

export default TodoList