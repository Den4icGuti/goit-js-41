const refs = {
  start: document.querySelector(".js-start"),
  finish: document.querySelector(".js-finish"),
  fieldGame: document.querySelector(".js-field"),
  indicator: document.querySelector(".js-indicator"),
};

console.log(refs);

let isPlay = false;

function onStart() {
  isPlay = true;
  refs.indicator.textContent = "play";
}

function onFinish() {
  if (isPlay) {
    isPlay = false;
    refs.indicator.textContent = "You win!";
  }
}

function onOutField() {
  if (isPlay) {
    isPlay = false;
    refs.indicator.textContent = "You exit game";
  }
}

function isPlayField(e) {
  if (isPlay && e.target.classList.contains("field-game")) {
    isPlay = false;
    refs.indicator.textContent = "you lose!";
  }
}

refs.start.addEventListener("mousemove", onStart);

refs.finish.addEventListener("mousemove", onFinish);

refs.fieldGame.addEventListener("mouseleave", onOutField);

refs.fieldGame.addEventListener("mousemove", isPlayField);
