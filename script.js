if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    this.navigator.serviceWorker.register("./sw.js");
  });
}

function startTimer() {
  let startTime = new Date().getTime();
  let fiveMinutes = 1000 * 60 * 5;
  let endTime = startTime + fiveMinutes;

  setInterval(function () {
    let timeLeft = endTime - new Date().getTime();
    let minutes = Math.floor(timeLeft / (1000 * 60));
    let seconds = Math.round((timeLeft / 1000) % 60);

    document.querySelector(".zeit").textContent = `0${minutes} : ${seconds}`;
  }, 1000);
}
