const input = document.getElementById("input");
const checkbtn = document.getElementById("btn");
const show_menu = document.querySelector(".show_menu");

let target = "delhi";
const fetchData = async () => {
  const url = `
    https://api.weatherapi.com/v1/current.json?key=081effa86a7e4d4b88210535220912&q=${target}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(location.name);
};

const updateThing = () => {};
fetchData();
