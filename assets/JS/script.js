// ------------------------------------------------------------------------------ //
// Live CLOCK
// ---------------------------------------------------------

function updateTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var t_str = hours + ":" + minutes + " ";
  if (hours > 11) {
    t_str += "PM";
  } else {
    t_str += "AM";
  }
  document.getElementById("mod__clock").innerHTML = t_str;
}
setInterval(updateTime, 1000);
// ------------------------------------------------------------------------------ //
// Live CLOCK - STATEMENT
// ---------------------------------------------------------
var hour = new Date().getHours();
let doo;
if (hour < 5) {
  doo = "dreaming";
} else if (hour >= 5 && hour <= 8) {
  doo = "making coffee";
} else if (hour >= 8 && hour <= 12) {
  doo = "designing things";
} else if (hour >= 12 && hour <= 18) {
  doo = "bringing ideas to life";
} else if (hour >= 18 && hour <= 21) {
  doo = "Quiet mode: recharge & reset.";
} else {
  doo = "meditation";
}

document.getElementById("mod__doo").innerHTML = doo;
