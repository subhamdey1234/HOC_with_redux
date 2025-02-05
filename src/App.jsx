import { useState } from 'react'

import './App.css'
import {Provider} from "react-redux"
import store from './redux2/store'
import Child2 from './Child2'
import ChildOne1 from './ChildOne1'
import Hoc from './Hoc'
function App() {

  const Newcomp=Hoc(ChildOne1);
  return (
    <>
    <Provider store={store}>
      <Child2/>
     
    </Provider>
    <div className='cardcontainer'>
      <Newcomp name="Subham" age={23} msg1="I am From Odisha" batch="Mern" />
      <Newcomp name="Rohit" age={30}  msg1="I am From Mumbai" batch="Sports"/>
      <Newcomp name="Virat" age={30}  msg1="I am From Bangaore" batch="Sports"/>
      <Newcomp name="Bumrah" age={32}  msg1="I am From Mumbai" batch="Sports"/>
      <Newcomp name="Hardik" age={23} msg1="I am From Mumbai" batch="Mern" />
      <Newcomp name="Sheryas" age={30}  msg1="I am From kolkata" batch="Sports"/>
      <Newcomp name="Rinku" age={30}  msg1="I am From Kolkata" batch="Sports"/>
      <Newcomp name="Ab devillers" age={32}  msg1="I am From South Africa" batch="Sports"/>
      </div>
      
    </>
  )
}

export default App
