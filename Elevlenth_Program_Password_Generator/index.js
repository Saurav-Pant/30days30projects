const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

function PasswordGen() {
  let selection =
    "abcdefghijklmnopqrstuvwxyz1234567890!@#$&ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let Password = "";
  let passLength = 12;
  for (let i = 0; i < passLength; i++) {
    let randomGenerator = Math.floor(Math.random() * selection.length);
    let something = selection.substring(randomGenerator, randomGenerator + 1);
    Password += something;
  }
  document.getElementById("input").value = Password;
}

function PasswordCopy() {
  let val = document.getElementById("input");
  val.select();
  document.execCommand("copy");
}
