const Clock = document.querySelector("#clock");

setInterval(function () {
  let date = new Date();
  //   console.log(date.toLocaleTimeString);
  Clock.innerHTML = date.toLocaleTimeString();
}, 1000);
