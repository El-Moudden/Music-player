
let track = document.getElementById("track");
let range = document.getElementById("range");
let play = document.getElementById("playPause");

track.onloadedmetadata = function(){
  range.max = track.duration ; 
  range.value = track.currentTime;
}

function playPause(){
  
  if(play.classList.contains("fa-pause")){
    track.pause();
    play.classList.remove("fa-pause");
    play.classList.add("fa-play");
  }else {
    track.play();
    setInterval(()=>{
      range.value= track.currentTime;

    },500)

    play.classList.add("fa-pause");
    play.classList.remove("fa-play");
  }
  range.onchange = function(){

    track.play();
    play.classList.add("fa-pause");
    play.classList.remove("fa-play");
    track.currentTime = range.value

  }

}

function red() {
  let aa =document.getElementById("h1");
  let bb =document.getElementById("h2");
  let cc =document.getElementById("h3");
 
  aa.style.backgroundColor = "red";
  bb.style.backgroundColor = "red";
  cc.style.backgroundColor = "red";
}

let back = document.querySelector(".back");


back.addEventListener("click" , ()=>{

  range.value -= 10;
  track.currentTime = range.value;


})


let next = document.querySelector(".next");
next.addEventListener("click" , ()=>{

  console.log(range.value)

  range.value = Number(range.value) + 10 ; 
  console.log(range.value) 
  
  track.currentTime = range.value;


})