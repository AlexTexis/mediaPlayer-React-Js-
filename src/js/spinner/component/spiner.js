import React from 'react'
import '../../../css/spinner.css'
const Spinner = (props)=>{
  return(
   props.spinnerVisible?
    <div className="spinner-container">
    <div className="spinner"></div>
    </div>
   :
   null
  )
}

export default Spinner