const input = document.getElementById("input");
const checkbtn = document.getElementById("btn");
const show_menu = document.querySelector(".show_menu");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const date = document.querySelector(".date");
const form = document.querySelector("form");

let target = "delhi";
const fetchData = async (target) => {
  const url = `
  https://api.weatherapi.com/v1/current.json?key=e86ed81b43864ac6a8c12208220912&q=${target}`;
  const response = await fetch(url);
  const data = await response.json();

  upDateDom(data.current.temp_c, data.location.region, data.location.localtime);
};

const upDateDom = (temperature, city_p, date_show) => {
  temp.innerHTML = temperature;
  city.innerHTML = city_p;
  date.innerHTML = date_show;
};
fetchData(target);
const search = (e) => {
  e.preventDefault();
  target = input.value;
  console.log(target);
  fetchData(target);
};
form.addEventListener("submit", search);
