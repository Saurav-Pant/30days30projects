const btn = document.getElementById("btn");
const onoff = document.querySelector(".video-container");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("switch")) {
    btn.classList.add("switch");
    onoff.pause();
  } else {
    btn.classList.remove("switch");
    onoff.play();
  }
});
