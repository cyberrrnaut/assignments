
function getAMPM(date) {
  let hour = date.getHours();
  let ampm = hour >= 12 ? "PM" : "AM";
  return ampm;
}

function clock() {
let time = new Date();

  let hours = time.getHours();
  let mins = time.getMinutes();
  let secs = time.getSeconds();
  let amPm = getAMPM(time);

  console.log(`${hours}:${mins}:${secs} ${amPm}`);
}

setInterval(clock, 1000);
