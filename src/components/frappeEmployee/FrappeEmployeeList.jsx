import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFrappeEmployeeAsync } from '../../Features/FrappeEmployee/frappeEmployeeSlice'
import {selectFrappeEmployee, selectStatus, selectError} from '../../Features/FrappeEmployee/frappeEmployeeSlice'

const FrappeEmployeeList = () => {

    const dispatch = useDispatch();
    const FrappeEmployee = useSelector(selectFrappeEmployee);
    

  return (
    <ul>
        {}
    </ul>
  )
}

export default FrappeEmployeeList