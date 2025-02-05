import React from 'react'

function ChildOne1(props) {
  return (<div style={{flexWrap:"wrap"}} className='mt-3 d-flex'>
    <div className='card mt-4 ' >
        <div className='card-header'><h2>User Details</h2></div>
      <div className='card-body'><h1><span style={{color:"red"}}>Name:</span> {props.name}</h1>
      <h1><span style={{color:"red"}}>Age:</span> {props.age}</h1>
      <h1><span style={{color:"red"}}>Address:</span> {props.msg1}</h1>
      <h1><span style={{color:"red"}}>Batch:</span> {props.batch}</h1>
      <h1><span style={{color:"red"}}>Voting_eligiblity:</span> {props.msg}</h1>
      </div>
    </div></div>
  )
}

export default ChildOne1;
