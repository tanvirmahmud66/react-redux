import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addTodo, removeTodo, selectTodo} from '../Features/todo/todoSlice.jsx'
import TodoInput from './TodoInput.jsx';
import TodoList from './TodoList.jsx';


const TodoApp = () => {

  return (
    <div>
        <TodoInput/>
        <TodoList/>
    </div>
  )
}

export default TodoApp