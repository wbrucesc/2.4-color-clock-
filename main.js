(function(){
'use strict';

// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// console.log(time);


  var clock = document.getElementById('clock');
  var timer = document.getElementById('timer-bar');
  // clock.innerHTML = "test";




  function zeroPad(char) {
    return ('0' + char).slice(-2);
  }

  function genHex(hours, minutes, seconds){
    return "#" + zeroPad(hours.toString(16)) + zeroPad(minutes.toString(16)) + zeroPad(seconds.toString(16));
  }

  function showTime(){
    var today = new Date();
    var currentHours = today.getHours();
    var currentMinutes = today.getMinutes();
    var currentSeconds = today.getSeconds();
    var progress = (currentSeconds / 60) * 100;

    clock.innerHTML =
    zeroPad(currentHours) + ":" + zeroPad(currentMinutes) + ":" + zeroPad(currentSeconds);
    // console.log(genHex(currentHours, currentMinutes, currentSeconds));

    document.body.style.backgroundColor = genHex(currentHours, currentMinutes, currentSeconds);
    document.getElementById('timer-bar').style.width = progress + "%";
    console.log(progress);

    setTimeout(showTime, 500);

  }
  showTime();




//
// function showTime(){
//   var currentTime = ;
//
//   return currentTime;
// }

// var currentTime = showTime(currentTime);
// console.log(currentTime);

// function pullRandomColor(){
//   var letters = '0123456789ABCDEF' .split ('');
//   var color = '#';
//   for (var i = 0; i < 6; i++ ) {
//       color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
// function changeRandomColor(change_time){
//   setInterval(function change_color(){
//     $("body").animate({
//       backgroundColor: pullRandomColor()
//     }, 500);
//   }, change_time);
// }
// changeRandomColor(1000);







}());
