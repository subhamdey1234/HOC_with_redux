import React from 'react'

const Hoc = (Callbackprop) => {
       return(props)=>{  //New Component
        const additionalprops={}
        if (props.age>=18) {
            additionalprops.msg="Eligble for Voting"
        }
        else{
            additionalprops.msg="Not Eligible For Voting"
        }
        console.log(props);
        
                  return (
                         
                   <Callbackprop {...props} {...additionalprops}/>
                         
                       ) 
              }
          }
export default Hoc
