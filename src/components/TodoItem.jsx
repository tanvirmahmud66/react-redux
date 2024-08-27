import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {editTodo, removeTodo, checkDone, unCheck} from '../Features/todo/todoSlice.jsx'

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const dispatch = useDispatch();

  const handleEdit = ()=>{
    if(isEditing){
        dispatch(editTodo({id:todo.id, text:newText}))
    }
    setIsEditing(!isEditing)
  }

  const handleComplete=(todo)=>{
    if(todo.complete){
        dispatch(unCheck(todo.id))
    }else{
        dispatch(checkDone(todo.id))
    }
  }

  return (
    <li style={{width:"550px", display:'flex', justifyContent:'space-between', alignItems:'center', padding:'5px', background:todo.complete?"red":"green",color:'white', marginBottom:'5px'}}>
        <div>
        {isEditing?(
            <input
                type='text'
                value={newText}
                onChange={(e)=> setNewText(e.target.value)}
            />

        ):(
            <span
                style={{
                    textDecoration: todo.complete ? 'line-through' : 'none',
                    cursor: 'pointer',
                }}
            >
                {todo.text}
            </span>
        )}
        </div>

      <div>
       <button onClick={handleEdit}>{isEditing? "Save": "Edit"}</button>
      {!isEditing && (
        <>
            <button onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
            
            <input
                type='checkbox'
                name='completeTodo'
                value={todo.complete}
                onClick={()=> handleComplete(todo)}
            />
            <label htmlFor='completeTodo'>Complete</label>
        </>
      )}
        
      </div> 
   </li>
  );
}

export default TodoItem;
