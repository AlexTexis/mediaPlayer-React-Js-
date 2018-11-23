import React,{Component} from 'react'

class Video extends Component{
  componentWillReceiveProps(nextProps){
    
    if(!this.props.pause === nextProps.pause){
      this.togglePlay()
    }
  }

  togglePlay = ()=>{
    if(this.props.pause)
    {
      this.video.pause()
    }
    else{
      this.video.play()
    }
  }

  refVideo = (element)=>{
    this.video = element
  }

  render()
  {
    return ( 
      <video
      src={this.props.src}
      ref = {this.refVideo}
      autoPlay={this.props.autoplay}
      onLoadedMetadata={this.props.duration}
      onTimeUpdate={this.props.currentTime}
      onSeeking ={this.props.handleSeeKing}
      onSeeked = {this.props.handleSeeKed}
      >
      </video>
    )
  }
}

export default Video

