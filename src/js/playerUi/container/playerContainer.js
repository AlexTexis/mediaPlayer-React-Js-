import React,{Component} from 'react'
import PlayerLayout from '../component/playerLayout'
import Controls from '../../controls/component/controlsUi'
import Video from '../../video/container/video'
import Spinner from '../../spinner/component/spiner'

class PlayerContainer extends Component{

  state = {
    srcMedia : 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
    pause : true,
    duration : 0,
    currentTime : 0,
    spinner : false
  }

  duration = (event)=>{
    this.video = event.target
     this.setState({
       duration : this.video.duration
     })
  }

  currentTime = (event)=>{
    this.setState({
      currentTime : this.video.currentTime
    })
  }

  handlePlay = ()=> this.setState({
    pause : !this.state.pause
  })

  handleTimeline = (event)=>{
    this.video.currentTime = event.target.value
  }

  handleVol = (event)=>{
    this.video.volume = event.target.value
  }

  handleFullScreen = ()=>{   
    if(!document.webkitIsFullScreen)
    {
      this.playerUi.webkitRequestFullscreen()
    }
    else{
      document.webkitExitFullscreen()
    }
  }

  handleSeeKing = ()=>{
    this.setState({
      spinner : !this.state.spinner
    })
  }

  handleSeeKed = ()=>{
    this.setState({
      spinner : !this.state.spinner
    })
  }

  openRangeVol = ()=>{
    this.rangeVol.classList.toggle('show')
  }

  refRange = (element)=> this.rangeVol = element

  componentDidMount()
  {
    this.setState({
      pause : (!this.props.autoplay)
    })
  }

  formatTimer = (timeSeconds)=>{
    let minutes = parseInt(timeSeconds / 60,10)
    let seconds = parseInt(timeSeconds % 60,10)
   return this.convertStrTime(minutes.toString(),seconds.toString())
  }

  convertStrTime = (minutes,seconds)=>{
    const template = '00' 
    minutes = template.substr(0,template.length - minutes.length) + minutes
    seconds = template.substr(0,template.length - seconds.length) + seconds
    return `${minutes} : ${seconds}`
  }

  refPlayer = (elemento)=>{
    this.playerUi = elemento
  }

  render()
  {
    return (
        <PlayerLayout refPlayer={this.refPlayer}>
        <Video
        autoplay={this.props.autoplay}
        src={this.state.srcMedia} 
        pause={this.state.pause} 
        duration={this.duration} 
        currentTime={this.currentTime}
        handleSeeKing={this.handleSeeKing}
        handleSeeKed={this.handleSeeKed}/>
        <Spinner spinnerVisible={this.state.spinner}/>
          <Controls 
          pause={this.state.pause}
           handlePlay={this.handlePlay}
           duration={this.state.duration}
           currenTime={this.state.currenTime}
           duration={this.state.duration} 
           currentTime={this.state.currentTime}
           formatTimer={this.formatTimer}
           handleTimeline={this.handleTimeline}
           handleVol={this.handleVol}
           openRangeVol={this.openRangeVol}
           refRange={this.refRange}
           handleFullScreen={this.handleFullScreen}/>
        </PlayerLayout>
    )
  }
}

export default PlayerContainer