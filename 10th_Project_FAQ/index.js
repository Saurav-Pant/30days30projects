const btn = document.getElementsByClassName("btn");
const first = document.getElementsByClassName("first");
const second = document.getElementsByClassName("second");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    this.classlist.toggle("active");
  });
}

