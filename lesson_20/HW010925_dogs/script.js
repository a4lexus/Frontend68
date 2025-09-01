const img = document.getElementById("dogImage");
let intervalId = null;
let intervalTime = 2500; 

function loadDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
      img.src = data.message;
    })
    .catch(err => console.error("Ошибка загрузки пёсика:", err));
}

function startAuto() {
  if (intervalId) return; 
  intervalId = setInterval(loadDog, intervalTime);
}

function stopAuto() {
  clearInterval(intervalId);
  intervalId = null;
}

function speedUp() {
  if (intervalTime > 1000) intervalTime -= 500;
  restartAuto();
}

function slowDown() {
  intervalTime += 500;
  restartAuto();
}

function restartAuto() {
  stopAuto();
  startAuto();
}



