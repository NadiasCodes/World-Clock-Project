//tokyo

function updateTime() {
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

  //paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}

//Vancouver
let vancouverElement = document.querySelector("#vancouver");
let vancouverDateElement = vancouverElement.querySelector(".date");
let vancouverTimeElement = vancouverElement.querySelector(".time");
let vancouverTime = moment().tz("America/Vancouver");

vancouverDateElement.innerHTML = vancouverTime.format("MMM Do YYYY");
vancouverTimeElement.innerHTML = vancouverTime.format(
  "h:mm:ss [<small>]A[</small>]"
);

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` <div class="cities">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMM Do YYYY")}</div>
          </div>
          <div>
            <div class="time">${cityTime.format(
              "h:mm:ss"
            )}<small> ${cityTime.format("A")}</small></div>
          </div>

         <a href= "index.html">All cities`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
