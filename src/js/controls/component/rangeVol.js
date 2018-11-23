import React from 'react'

const RangeVol = (props)=>{
  return (
    <input
    className="range-vol"
    type="range"
    min={0}
    max={1}
    step={.05}
    onChange={props.handleVol}
    ref={props.refRange}
    />
  )
}

export default RangeVol