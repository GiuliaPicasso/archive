var myvideo = document.getElementById("video1")
function playpause(){
  if(myvideo.paused){
    myvideo.play();
    document.getElementById("playpause_img").style.backgroundImage = "none";
  }
  else {
    myvideo.pause()
    document.getElementById("playpause_img").style.backgroundImage = "url('images/playbtn.png')";
  }
}
