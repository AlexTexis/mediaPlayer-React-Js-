import React from 'react'
import '../../../css/controls.css'
import PlayPause from '../../icons/component/play-pause'
import Timer from '../../timer/component/timer'
import TimeLine from '../../controls/component/timeline'
import Volume from '../../icons/component/vol'
import RangeVol from './rangeVol'
import FullScreen from '../../icons/component/full-screen'

const Controls = (props)=>{
  return (
    <div className="controls-container">
      <PlayPause handlePlay={props.handlePlay} pause={props.pause}/>
      <Timer duration={props.duration} currentTime={props.currentTime} formatTimer={props.formatTimer}/>
      <TimeLine duration={props.duration} currentTime={props.currentTime} handleTimeline={props.handleTimeline}/>
      <Volume openRangeVol={props.openRangeVol}/>
      <RangeVol handleVol={props.handleVol} refRange={props.refRange}/>
      <FullScreen handleFullScreen={props.handleFullScreen}/>
    </div>
  )
}

export default Controls