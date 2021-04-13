import "./style.css";
const player = document.querySelector('.player')! as HTMLDivElement;
const video = document.querySelector('video')! as HTMLVideoElement;
const progressRange = document.querySelector(".progress-range")! as HTMLDivElement;
const progressBar = document.querySelector(".progress-bar")! as HTMLDivElement;
const playBtn = document.querySelector("#play-btn")!;
const volumeIcon = document.querySelector("#volume-icon")!;
const volumeRange = document.querySelector(".volume-range")! as HTMLDivElement;
const volumeBar = document.querySelector(".volume-bar")! as HTMLDivElement;
const currentTime = document.querySelector(".time-elapsed")!;
const dutation = document.querySelector(".time-duration")!;
const fullscreenBtn = document.querySelector(".fullscreen")!
const speed = document.querySelector(".player-speed")! as HTMLSelectElement;

console.log(
  fullscreenBtn,speed
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

let lastVolume = 1;


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

  lastVolume=volume;
}

// Mute / unmute
const toggleMute = () => {
  volumeIcon.className = ''

  if(video.volume ){
    lastVolume = video.volume;
    video.volume = 0;
    volumeBar.style.width = `0`;
    volumeIcon.classList.add('fas', 'fa-volume-mute');
    volumeIcon.setAttribute('title','unmute');
  }else{
    video.volume = lastVolume;
    volumeBar.style.width = `${lastVolume * 100}%`;
    volumeIcon.classList.add('fas', 'fa-volume-up');
    volumeIcon.setAttribute('title','mute');
  }
}


// Change Playback Speed -------------------- //
const changeSpeed = (e:Event) => {
  video.playbackRate = (e.target as any).value;
}


// Fullscreen ------------------------------- //

/* View in fullscreen */
function openFullscreen(elem:any) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }

  video.classList.add('video-fullscreen');
}

/* Close fullscreen */
function closeFullscreen() {
  const doc = document as any
  if (doc.exitFullscreen) {
    doc.exitFullscreen();
  } else if (doc.webkitExitFullscreen ) { /* Safari */
    doc.webkitExitFullscreen();
  } else if (doc.msExitFullscreen) { /* IE11 */
    doc.msExitFullscreen();
  }
  video.classList.remove('video-fullscreen');
}
let fullscreen = false;
const toggleFullScreen = () => {
  fullscreen ? closeFullscreen() : openFullscreen(player)
  fullscreen = !fullscreen;
}


// Event
playBtn.addEventListener('click', togglePlay);
video.addEventListener('click',togglePlay);
video.addEventListener('timeupdate',updateProgress);
video.addEventListener('canplay',updateProgress);
progressRange.addEventListener('click',setProgress);
volumeRange.addEventListener('click',chageVolume)
volumeIcon.addEventListener('click',toggleMute);
speed.addEventListener('change',changeSpeed);
fullscreenBtn.addEventListener('click',toggleFullScreen);






