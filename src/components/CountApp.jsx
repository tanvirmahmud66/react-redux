import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, selectCount } from '../Features/counter/counterSlice'

const CountApp = () => {

    const count = useSelector(selectCount);
    const dispatch = useDispatch();

  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
        <button onClick={()=> dispatch(incrementByAmount(10))}>Increment by 10</button>
    </div>
  )
}

export default CountApp