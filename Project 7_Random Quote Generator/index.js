const btn = document.getElementById("btn");
const quotes = document.getElementById("quote");

btn.addEventListener("click", async () => {
  //Fetching URl
  let URL = "https://type.fit/api/quotes";
  let response = await fetch(URL);
  let data = await response.json();
  let index = Math.floor(Math.random() * data.length);

  const dataarray = data[index].text;
  quotes.innerText = dataarray;
});
