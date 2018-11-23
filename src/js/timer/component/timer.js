import React from 'react'

const Timer = (props)=>{
  return(
    <div className="timer-container">
    <span className="timer">
      {props.formatTimer(props.currentTime)} / {props.formatTimer(props.duration)}
    </span>
    </div>
  )
}

export default Timer