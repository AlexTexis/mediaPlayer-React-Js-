import React from 'react'

const TimeLine = (props)=>{
  return ( 
    <input
    className="timeline"
    type="range"
    min={0}
    max={props.duration}
    value={props.currentTime}
    onChange={props.handleTimeline}
    />
  )
}

export default TimeLine