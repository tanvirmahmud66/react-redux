import { createSlice } from "@reduxjs/toolkit";

export const EmployeeSlice = createSlice({
    name: 'employees',
    initialState: [],
    reducers:{
        addEmployee: (state, action)=>{
            state.push(action.payload)
        },
        editEmployee: (state, action)=>{
            const {id, name, designation, department, gender, salary} = action.payload
            const employee = state.find((employee)=> employee.id===id)
            if (employee){
                employee.id=id
                employee.name=name
                employee.designation = designation
                employee.department = department
                employee.gender = gender
                employee.salary = salary
            }
        },
        removeEmployee: (state, action)=>{
            return state.filter((employee)=> employee.id!==action.payload)
        }
    }
})

export const {addEmployee, editEmployee, removeEmployee} = EmployeeSlice.actions;
export const selectEmployees = (state) => state.employees;
export default EmployeeSlice.reducer;