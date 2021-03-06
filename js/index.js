const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");

$play.addEventListener("click", () => {
  $video.play();
  $pause.hidden = false;
  $play.hidden = true;
});

$pause.addEventListener("click", () => {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
});

$backward.addEventListener("click", () => {
  $video.currentTime -= 10;
});

$forward.addEventListener("click", () => {
  $video.currentTime += 10;
});

const $progress = document.querySelector("#progress");
$video.addEventListener("loadedmetadata", () => {
  $progress.max = $video.duration;
});

$video.addEventListener("timeupdate", () => {
  $progress.value = $video.currentTime;
});

$progress.addEventListener("input", () => {
  $video.currentTime = $progress.value;
});
