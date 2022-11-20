const next = document.getElementById("second");
const prev = document.getElementById("first");
const slideno = 0;

const slides = document.getElementsByClassName("corousel");
console.log(slides);

const how = slides.length - 1;
console.log(how);

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("first1");
    slide.classList.add("first1");
  }
}
function nextSlide() {
  if (slideno == how) {
    slideno = 0;
  } else {
    slideno++;
  }
  slides[slideno].classList.add("first1");
}

function prevSlide() {
  if (slideno == 0) {
    slideno = how;
  } else {
    slideno--;
  }
  slides[slideno].classList.add("first1");
}
