function updateData() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  const currentUTCTime = currentDate.getTime();
  
  document.getElementById("current-day").textContent = currentDayOfWeek;
  document.getElementById("current-utc-time").textContent = currentUTCTime;
}

updateData();

setInterval(updateData, 1000);

document.getElementById("slack-name").textContent = "Ojiteli Kosisochukwu";
document.getElementById("my-track").textContent = "Frontend";