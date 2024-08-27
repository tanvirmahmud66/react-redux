import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo: (state, action)=>{
            state.push({id: Date.now(), text: action.payload, complete: false})
        },
        removeTodo: (state, action) => {
            return state.filter((each)=> each.id !== action.payload)
        },
        editTodo: (state, action)=>{
            const {id, text} = action.payload;
            const todo = state.find((todo)=>todo.id===id)
            if(todo){
                todo.text = text
            }
        },
        checkDone: (state,action)=>{
            const completedTodo = state.find((todo)=>todo.id===action.payload)
            if(completedTodo){
                completedTodo.complete = true
            }
        },
        unCheck:(state, action)=>{
            const unCheckTodo = state.find((todo)=>todo.id===action.payload)
            if (unCheckTodo){
                unCheckTodo.complete = false
            }
        }

    }
})

export const {addTodo, removeTodo, editTodo,checkDone, unCheck} = todoSlice.actions;
export const selectTodo = (state)=> state.todo;

export default todoSlice.reducer;