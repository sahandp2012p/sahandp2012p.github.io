function startTimer() {
  let startTime = new Date().getTime();
  let fifteenMinutes = 1000 * 60 * 15;
  let endTime = startTime + fifteenMinutes;
  let ding = new Audio("./ding.mp3");

  let timer = setInterval(function() {
    let timeLeft = endTime - new Date().getTime();
    let minutes = Math.floor(timeLeft / (1000 * 60));
    let seconds = Math.round((timeLeft / 1000) % 60);

    document.querySelector(".zeit").textContent = `${minutes} : ${seconds}`;

    
    if (minutes < 10) {
      document.querySelector(".zeit").textContent = `0${minutes} : ${seconds}`;
    }
    
    
    if (minutes == 0 && seconds == 0) {
      ding.play()
      clearInterval(timer)
    }
  }, 1000);
}
