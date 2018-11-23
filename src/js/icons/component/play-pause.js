import React from 'react'
import Icon from './icon'

const Play = (props)=>{

  return (
    <div className="play.pause-container">
    {
     
      props.pause?
      <span className="pause" onClick={props.handlePlay}>
      <Icon fill="#fff" width="32" height="32">
      <path d="M4 4h10v24h-10zM18 4h10v24h-10z"></path>
      </Icon>
      </span>
      :
      <span className="play" onClick={props.handlePlay}>
      <Icon fill="#fff" width="32" height="32">
        <path d="M6 4l20 12-20 12z"></path>
      </Icon>
      </span>

    }
    </div>
      
  )
}

export default Play