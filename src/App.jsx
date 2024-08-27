import { useState } from 'react'
import './App.css'
import CountApp from './components/CountApp.jsx'
import TodoApp from './components/TodoApp.jsx'
import EmployeeApp from './components/employee/EmployeeApp.jsx'

function App() {

  return (
    <>
      <div>
        {/* <CountApp/> */}
        {/* <TodoApp/> */}
        <EmployeeApp/>
      </div>
    </>
  )
}

export default App
