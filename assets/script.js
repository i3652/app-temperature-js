const city = "montlhéry";
const country = "fr";
const paragraphElement = document.querySelector("p");
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=489d758cad27ef9f5cf4e242b9c4adbf`
)
  .then(response => response.json())
  .then(data => {
    console.dir(data);
    console.log(data.main.temp);
    let temp = Math.round(data.main.temp - 273, 15);
    paragraphElement.textContent =
      temp +
      `°C
       à 
       ${data.name}`;
  });
