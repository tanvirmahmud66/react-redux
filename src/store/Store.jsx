import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Features/counter/counterSlice.jsx';
import todoReducer from '../Features/todo/todoSlice.jsx';
import employeeReducer from '../Features/employee/employeeSlice.jsx';
import frappeEmployeeReducer from '../Features/FrappeEmployee/frappeEmployeeSlice.jsx'
import { thunk } from "redux-thunk";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        employees: employeeReducer,
        frappeEmployee: frappeEmployeeReducer,
    },
    middleware:[thunk]

});