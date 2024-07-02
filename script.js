const day = new Date();
const dayOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
][day.getDate()];
document.getElementById("day").innerHTML = `<b>Day: </b> ${dayOfTheWeek}`;

function updateUTCTime() {
  const day = new Date();

  const utcHours = day.getUTCHours();
  const utcMinutes = day.getUTCMinutes();
  const utcSeconds = day.getUTCSeconds();

  const formattedUtcTime = `${utcHours.toString().padStart(2, "0")}:${utcMinutes
    .toString()
    .padStart(2, "0")}:${utcSeconds.toString().padStart(2, "0")}`;

  document.getElementById(
    "time_utc"
  ).innerHTML = `<b>UTC Time: </b> ${formattedUtcTime}`;
}

updateUTCTime();

setInterval(updateUTCTime, 1000);
