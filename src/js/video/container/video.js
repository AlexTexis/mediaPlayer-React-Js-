import React,{Component} from 'react'

class Video extends Component{
  componentWillReceiveProps(nextProps){
    // console.log(nextProps.pause)
    if(!this.props.pause === nextProps.pause){
      this.togglePlay()
    }
  }

  togglePlay = ()=>{
    if(this.props.pause)
    {
      this.video.play()
    }
    else{
      this.video.pause()
    }
  }

  refVideo = (element)=>{
    this.video = element
  }

  render()
  {
    return ( 
      <video
      ref = {this.refVideo}
      src={this.props.src}
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

