const text = "Hii I am Saurav Pant!";

let index = 0;
function WriteThis() {
  document.body.innerText = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 0;
  }
}

setInterval(WriteThis, 100);
