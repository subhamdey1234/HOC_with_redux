import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import store from './redux/store';
import countreducer from './redux/countreducer';
function Child() {
const count=useSelector((store)=>store.countreducer)

const dispatch= useDispatch();
  return (
    <div>
     <h1 className='text-white'>Using Redux child</h1> 
     <h2 className='text-white mb-4'>{count}</h2>
     <button className='btn btn-success me-3 ' onClick={()=>dispatch({type:"Increment"})}> Increment </button>
     <button className='btn btn-danger' onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
    </div>
  )
}

export default Child;
