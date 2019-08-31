
/// IMAGE CAROUSEL ///


// declarations
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
let pauseBtn = document.querySelector(".pauseBtn");
let playBtn = document.querySelector(".playBtn");

let index;
let currentSlide;
let timer = null;
let isPlaying = true;

// play carousel
window.onload = playSlidesFrom(0);

 // AUTO PLAY LOOP //
function playSlidesFrom(index) {

  //console.log("---------");
  //console.log("index ", index);
  //console.log("currentSlide ", currentSlide);

  // reset index at end of nodelist
  if (index > slides.length - 1) {
    index = 0;
  }

  // reset index to first slide at
  if (index < 0) {
    index = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    // console.log("Hiding slide ", i);
  }

  //console.log("Showing slide: ", index);
  slides[index].style.display = "block";
  currentSlide = index;

  timer = setTimeout(function() {
    playSlidesFrom(currentSlide + 1);
  }, 2000);
}

/// PAUSE AND PLAY ///
pauseBtn.onclick = function pausePlay(){
  if(isPlaying){
      pause();
  }
  else{
      play();
  }
}

playBtn.onclick = function pausePlay(){
    if(!isPlaying){
        play();
    }
    else{
        pause();
    }
  }

function pause(){
  playBtn.style.display = "block"; //show play button
  pauseBtn.style.display = "none"; //hide pause button
  isPlaying = false;
  clearTimeout(timer); // clearing timer will stop auto play
}

function play(){
  playBtn.style.display = "none"; // hide play button
  pauseBtn.style.display = "block"; //show pause button
  isPlaying = true;
  playSlidesFrom(currentSlide); // resume auto play
}

/// PREV AND NEXT ///
prevBtn.onclick = function prevSlide() {
  moveSlide(currentSlide - 1);
}

nextBtn.onclick = function nextSlide() {
  moveSlide(currentSlide + 1);
}

function moveSlide(index) {
  // clearing timer will stop auto play
  clearTimeout(timer);

  // resume auto play from slide
  playSlidesFrom(index);
}

/// EVENT LISTENERS ///
// Key events for prev and next
document.onkeydown = function move(event) {
  if (event.code == 'ArrowLeft') {
      prevSlide();
  }
  if (event.code == 'ArrowRight') {
      nextSlide();
  }
}

// Key events to toggle between pause and play
document.onkeydown = function space(event) {
    if (event.code == 'Space') {
        pause();
    } else if (event.code == 'Space') {
        play();
    }
}


