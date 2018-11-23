import React from 'react'

const Icon = (props)=>{
  return (
    <svg 
    fill={props.fill}
     width={props.width} 
     height={props.heigth}
     viewBox="0 0 32 32">
    {props.children}
    </svg>
  )
}

export default Icon