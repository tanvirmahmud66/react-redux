import React from 'react'
import { useSelector } from 'react-redux'
import { selectEmployees } from '../../Features/employee/employeeSlice.jsx'
import EmployeeListItem from './EmployeeListItem'

const EmployeeList = () => {

    const employees = useSelector(selectEmployees);
    console.log(employees)

  return (
    <ul>
        {employees.map((employee)=>(
            <EmployeeListItem key={employee.id} employee={employee}/>
        ))}
    </ul>
  )
}

export default EmployeeList