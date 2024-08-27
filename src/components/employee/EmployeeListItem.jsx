import React, { useState } from 'react'
import { removeEmployee, editEmployee } from '../../Features/employee/employeeSlice'
import { useDispatch } from 'react-redux'

const EmployeeListItem = ({employee}) => {

    const [targetEmployee, setTargetEmployee] = useState(employee)
    const [isEditing, setIsEditing] = useState(false)
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTargetEmployee((prevEmployee) => ({
        ...prevEmployee,
        [name]: value
        }));
    };

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(editEmployee(targetEmployee)) 
        setIsEditing(!isEditing)
    }

    const handleEdit = ()=> {
        setIsEditing(!isEditing)
    }

    const handleDelete = (id)=>{
       dispatch(removeEmployee(id))
    }

  return (
    <li style={{}}>
        {isEditing? (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={targetEmployee.name}
                    onChange={handleChange}
                    placeholder="Employee Name"
                />
                <select
                    name="gender"
                    value={targetEmployee.gender}
                    onChange={handleChange}
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <input
                    type="text"
                    name="designation"
                    value={targetEmployee.designation}
                    onChange={handleChange}
                    placeholder="Employee Designation"
                />
                <input
                    type="text"
                    name="department"
                    value={targetEmployee.department}
                    onChange={handleChange}
                    placeholder="Department"
                />
                <input
                    type="number"
                    name="salary"
                    value={targetEmployee.salary}
                    onChange={handleChange}
                    placeholder="Employee Salary"
                />
                <button type="submit">Save</button>
            </form>
        ):(
        <div>
            <h2>Name: {employee.name}</h2>
            <p>Designation: {employee.designation}</p>
            <p>Department: {employee.department}</p>
            <p>Salary: {employee.salary}</p> 
            <p>Gender: {employee.gender}</p>
        </div>
        )}
        
        <div>
            {!isEditing && (
                <>
                    <button onClick={()=> handleEdit()}>Edit Information</button>  
                    <button onClick={()=> handleDelete(employee.id)}>Delete Employee</button>
                </>
            )}
        </div>
    </li>
  )
}

export default EmployeeListItem