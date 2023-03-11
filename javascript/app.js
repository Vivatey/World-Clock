function updateTime() {
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("ddd, D MMMM YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>]a[</small>]"
    );
  }

  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("ddd, D MMMM YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]a[</small>]"
    );
  }

  let kualalumpurElement = document.querySelector("#kuala-lumpur");
  if (kualalumpurElement) {
    let kualalumpurDateElement = kualalumpurElement.querySelector(".date");
    let kualalumpurTimeElement = kualalumpurElement.querySelector(".time");
    let kualalumpurTime = moment().tz("Asia/kuala_lumpur");

    kualalumpurDateElement.innerHTML = kualalumpurTime.format("ddd, D MMMM YYYY");
    kualalumpurTimeElement.innerHTML = kualalumpurTime.format(
      "h:mm:ss [<small>]a[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  console.log(cityTimeZone);

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  let cityTime = moment().tz(cityTimeZone);
  console.log(cityTime.format("ddd, D MMMM YYYY"));

  let citiesElement = document.querySelector("#cities");
  // citiesElement.innerHTML = cityTimeZone;

  citiesElement.innerHTML = `
    <div class="city">
          <div>
            <h2>${cityName}</h2>

            <div class="date">${cityTime.format("ddd, D MMMM YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("a")}</small></div>
        </div>
        <a href="/" class="home"><i class="fa-solid fa-house"></i></a>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
