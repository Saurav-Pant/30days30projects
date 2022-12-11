const panels = document.querySelectorAll(".panel");
const active = document.querySelector("active");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeThis();
    panel.classList.add("active");
  });
});
function removeThis() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
