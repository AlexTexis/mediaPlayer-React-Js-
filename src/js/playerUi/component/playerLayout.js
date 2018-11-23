import React from 'react'
import '../../../css/player.css'
const PlayerLayout = (props)=>{
  return (
    <div className="player-container" ref={props.refPlayer}>
      {props.children}
    </div>
  )
}

export default PlayerLayout