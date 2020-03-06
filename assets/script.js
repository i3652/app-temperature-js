function affiche(event) {
  event.preventDefault();
  const city = document.getElementById("inputVilleDep").value;
  const country = document.getElementById("inputPays").value;
  const paragraphElement = document.querySelector("p");
  console.log(city);
  console.log(country);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=489d758cad27ef9f5cf4e242b9c4adbf`
  )
    .then(response => response.json())
    .then(data => {
      let temp = Math.round(data.main.temp - 273, 15);
      paragraphElement.textContent = `${temp} °C
       à 
       ${data.name}`;
    });
}
formulaire = document.querySelector(".ui.form");
formulaire.addEventListener("submit", affiche);
