const first = document.getElementById("r");
const second = document.getElementById("s");
const third = document.getElementById("p");
const btn = document.querySelectorAll(".btn");

const list = [first, second, third];
const computer_choose = Math.floor(Math.random() * list.length);
console.log(computer_choose);

for (let i = 1; i < 10; i++) {
  first.addEventListener("click", () => {
    if (computer_choose == 0) {
      document.getElementById("nextcontainer").innerHTML = "Tie Game!!";
    }
    if (computer_choose == 1) {
      document.getElementById("nextcontainer").innerHTML = "You Won!";
    }
    if (computer_choose == 2) {
      document.getElementById("nextcontainer").innerHTML = "You Won!";
    }
  });

  second.addEventListener("click", () => {
    if (computer_choose == 0) {
      document.getElementById("nextcontainer").innerHTML = "Computer Won!";
    }
    if (computer_choose == 1) {
      document.getElementById("nextcontainer").innerHTML = "Tie Game";
    } else {
      document.getElementById("nextcontainer").innerHTML = "Computer Won!";
    }
  });

  third.addEventListener("click", () => {
    if (computer_choose == 0) {
      document.getElementById("nextcontainer").innerHTML = "Computer Won!";
    }
    if (computer_choose == 1) {
      document.getElementById("nextcontainer").innerHTML = "Computer Won!";
    } else {
      document.getElementById("nextcontainer").innerHTML = "Tie Game!";
    }
  });
}
