var time = moment().format("MMM Do YYYY");
$("#currentDay").text(time);

var currentTime = moment().format('LT');

if (currentTime === 8) {
  setColor .present;
} else if (currentTime >= 8) {
  document.body.past;
} else (currentTime <= 8) {
  document.body.future;
}