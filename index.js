//You can change your Date of Birth from here ok!
const countDownDate = new Date("feb 24, 2023").getTime();

function countdown(){
  const now = new Date().getTime();
  const totaltime = countDownDate - now;

  const days = Math.floor(totaltime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totaltime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((totaltime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((totaltime % (1000 * 60)) / 1000);
  
  // console.log(days,hours,minutes,seconds);
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = formatTime(hours);
  document.getElementById("Minute").innerHTML = formatTime(minutes);
  document.getElementById("Second").innerHTML =formatTime (seconds);
  
  function formatTime(Time){
    return Time<10 ? `0${Time}` : Time;
  }
  
   if (totaltime < 0) {
    clearInterval(countdown);
    document.getElementById("then").innerHTML = "Happy Birthday Dear";
     
       document.getElementById("days").innerHTML = "0";
       document.getElementById("hours").innerHTML = "0";
       document.getElementById("Minute").innerHTML = "0";
       document.getElementById("Second").innerHTML = "0";
     
  }
}
countdown();
setInterval(countdown, 1000); 




const snowContainer = document.getElementById("container");
const snowContent = ['&#10052', '&#10053', '&#10054']

const random = (num) => {
  return Math.floor(Math.random() * num);
}

const getRandomStyles = () => {
  const top = random(100);
  const left = random(100);
  const dur = random(10) + 5;
  const size = random(25) + 25;
  return `
    top: -${top}%;
    left: ${left}%;
    font-size: ${size}px;
    animation-duration: ${dur}s;
  `;
}

const createSnow = (num) => {
  for (var i = num; i > 0; i--) {
    var snow = document.createElement("div");
    snow.className = "snow";
    snow.style.cssText = getRandomStyles();
    snow.innerHTML = snowContent[random(3)]
    snowContainer.append(snow);
  }
}

const removeSnow = () => {
}

window.addEventListener("load", () => {
  createSnow(30)
});

