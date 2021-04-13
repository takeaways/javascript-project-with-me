import "./style.css";
const video = document.querySelector('video')!;
const progressRange = document.querySelector(".progress-range")! as HTMLDivElement;
const progressBar = document.querySelector(".progress-bar")! as HTMLDivElement;
const playBtn = document.querySelector("#play-btn")!;
const vloumeIcon = document.querySelector("#volume-icon")!;
const volumeRange = document.querySelector(".volume-range")!;
const volumeBar = document.querySelector(".volume-bar")!;
const currentTime = document.querySelector(".time-elapsed")!;
const dutation = document.querySelector(".time-duration")!;
const fullscreenBtn = document.querySelector(".fullscreen")!;

console.log(
  video,
  "-->",progressRange,
  progressBar,
  playBtn,
  vloumeIcon,
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



// Change Playback Speed -------------------- //



// Fullscreen ------------------------------- //


// Event
playBtn.addEventListener('click', togglePlay);
video.addEventListener('click',togglePlay);
video.addEventListener('timeupdate',updateProgress);
video.addEventListener('canplay',updateProgress);
progressRange.addEventListener('click',setProgress);