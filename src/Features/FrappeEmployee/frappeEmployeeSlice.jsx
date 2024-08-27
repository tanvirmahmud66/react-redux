import { createSlice } from "@reduxjs/toolkit";
import { fetchEmployee, addEmployee, updateEmployee, deleteEmployee } from "./frappeEmployeeApi";

// createSlice
export const frappeEmployeeSlice = createSlice({
    name: "FrappeEmployee",
    initialState: {
        frappeEmployees: [],
        status: 'idle',
        error:null
    },
    reducers:{
        fetchFrappeEmployee: (state,action)=>{
            state.status = 'loading'
        },
        fetchFrappeEmployeeSuccess: (state, action)=>{
            state.status = 'succeeded';
            state.frappeEmployees = action.payload
        },
        fetchFrappeEmployeeFailure: (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        }
    }
})

// thunk to fetch frappe employee
export const fetchFrappeEmployeeAsync = () => async(dispatch) => {
    dispatch(fetchFrappeEmployee());
    try{
        const frappeEmployees = await fetchEmployee();
        dispatch(fetchFrappeEmployeeSuccess(frappeEmployees));
    }catch(error){
        dispatch(fetchFrappeEmployeeFailure(error.toString()));
    }
}




export const {fetchFrappeEmployee, fetchFrappeEmployeeSuccess,fetchFrappeEmployeeFailure} = frappeEmployeeSlice.actions;
export const selectFrappeEmployee = (state) => state.FrappeEmployee.frappeEmployees;
export const selectStatus = (state) => state.FrappeEmployee.status
export const selectError = (state) => state.FrappeEmployee.error