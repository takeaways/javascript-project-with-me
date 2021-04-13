import "./style.css";
const video = document.querySelector('video')! as HTMLVideoElement;
const progressRange = document.querySelector(".progress-range")! as HTMLDivElement;
const progressBar = document.querySelector(".progress-bar")! as HTMLDivElement;
const playBtn = document.querySelector("#play-btn")!;
const volumeIcon = document.querySelector("#volume-icon")!;
const volumeRange = document.querySelector(".volume-range")! as HTMLDivElement;
const volumeBar = document.querySelector(".volume-bar")! as HTMLDivElement;
const currentTime = document.querySelector(".time-elapsed")!;
const dutation = document.querySelector(".time-duration")!;
const fullscreenBtn = document.querySelector(".fullscreen")!;

console.log(
  volumeIcon,
  volumeRange,
  volumeBar,
  currentTime,
  dutation,
  fullscreenBtn
);

// Play & Pause ----------------------------------- //

const showPlayIcon = () => {
  playBtn.classList.replace('fa-pause','fa-play');
  playBtn.setAttribute('title', 'Play')
}

const togglePlay = () => {
  if(video.paused){
    video.play();
    playBtn.classList.replace('fa-play','fa-pause');
    playBtn.setAttribute('title', 'pause')
  }else{
    video.pause();
    showPlayIcon();
  }
}

//on video end, show play button icon
video.addEventListener('ended', showPlayIcon)


// calculate display time 
const displayTime = (time:number) => {
  const min = Math.floor(time / 60)
  const isOverTen = Math.floor(time % 60) > 9;
  const sec = isOverTen  ? `${Math.floor(time % 60)}` : `0${Math.floor(time % 60)}`
  return `${min}:${sec}`
}
// Progress Bar ---------------------------------- //
const updateProgress = () => {
  const playtime = (video.currentTime / video.duration) * 100
  progressBar.style.width = `${playtime}%`
  currentTime.textContent=`${ displayTime(video.currentTime)} / `
  dutation.textContent = displayTime(video.duration)
}

// click to seek within the video
const setProgress = (e:MouseEvent) => {
  const newTime = e.offsetX / progressRange.offsetWidth;
  progressBar.style.width = `${newTime * 100}%`;
  video.currentTime = newTime * video.duration
}

// Volume Controls --------------------------- //
const chageVolume = (e:MouseEvent) => {
  let volume = e.offsetX / volumeRange.offsetWidth;
  if(volume < 0.1){
    volume = 0;
  }
  if(volume > 0.9){
    volume = 1;
  }
  volumeBar.style.width = `${volume * 100}%`;
  video.volume = volume;
  // icon
  volumeIcon.className = ``;
  if(volume > 0.7){
    volumeIcon.classList.add('fas','fa-volume-up')
  }else if(volume < 0.7 && volume > 0){
    volumeIcon.classList.add('fas', 'fa-volume-down');
  }else if(volume === 0){
    volumeIcon.classList.add('fas','fa-volume-off')
  }
}


// Change Playback Speed -------------------- //



// Fullscreen ------------------------------- //


// Event
playBtn.addEventListener('click', togglePlay);
video.addEventListener('click',togglePlay);
video.addEventListener('timeupdate',updateProgress);
video.addEventListener('canplay',updateProgress);
progressRange.addEventListener('click',setProgress);
volumeRange.addEventListener('click',chageVolume)