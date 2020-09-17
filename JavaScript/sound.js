bod.sound ={
  
  play : (audio)=>{
    song = new Audio(audio)
    song.play()
  },
  stop : ()=>{
    song.stop()
  }
  pause : ()=>{
    song.pause()
  }
  
  
}