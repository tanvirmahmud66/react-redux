import React, { useState } from 'react'
import {addEmployee} from '../../Features/employee/employeeSlice.jsx'
import {useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

const EmployeeInput = () => {

    const [newEmployee, setNewEmployee] = useState({
        id: nanoid(),
        name: '',
        gender: 'male',
        designation: '',
        department: '',
        salary: ''
    });

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee((prevEmployee) => ({
        ...prevEmployee,
        [name]: value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addEmployee(newEmployee));
        setNewEmployee({
          id: nanoid(),
          name: '',
          gender: 'male',
          designation: '',
          department: '',
          salary: ''
        });
    };

  return (
    <>
        <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="name"
        value={newEmployee.name}
        onChange={handleChange}
        placeholder="Employee Name"
      />
      <select
        name="gender"
        value={newEmployee.gender}
        onChange={handleChange}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <input
        type="text"
        name="designation"
        value={newEmployee.designation}
        onChange={handleChange}
        placeholder="Employee Designation"
      />
      <input
        type="text"
        name="department"
        value={newEmployee.department}
        onChange={handleChange}
        placeholder="Department"
      />
      <input
        type="number"
        name="salary"
        value={newEmployee.salary}
        onChange={handleChange}
        placeholder="Employee Salary"
      />
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default EmployeeInput