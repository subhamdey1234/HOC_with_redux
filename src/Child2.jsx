import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './redux2/slices/countslice';

function Child2() {
    let count=useSelector((store)=>store.counter)
    const dispatch=useDispatch()
  return (
    <div>
     <h1 style={{
        textDecoration:"underline",
        marginBottom:'30px'
     }}>Redux Toolkit </h1>   
  <h1>{count}</h1>  
  <button className='btn btn-success me-3' onClick={()=>dispatch(increment())}>Increment</button>
  <button className='btn btn-danger ' onClick={()=>dispatch(decrement())}>decrement</button>
  <button className='btn btn-warning ms-3' onClick={()=>dispatch(reset())}>reset</button>   
    </div>
  )
}

export default Child2;
