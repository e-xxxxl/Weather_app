const displayy = async () => {
    let apiKey = "b8108492d8bf5039e9a9b93d13037aa8";
    let areaName = document.getElementById("inp1").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${areaName}&appid=${apiKey}&units=metric`;
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const response = fetch(apiUrl);
        if (response.status == 404) {
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
        } else {
          document.querySelector(".city").innerHTML = data.name;
          document.querySelector(".temp").innerHTML =
            Math.round(data.main.temp) + "°c";
          document.querySelector(".humidity").innerHTML =
            data.main.humidity + "%";
          document.querySelector(".wind").innerHTML =
            data.main.speed + " km/h";
        }
        if (data.weather[0].main == "Clouds") {
          weatherIcon.src = "./img/clouds.png";
        } else if (data.weather[0].main == "Clear") {
          weatherIcon.src = "./img/clear.png";
        } else if (data.weather[0].main == "Rain") {
          weatherIcon.src = "./img/rain.png";
        } else if (data.weather[0].main == "Mist") {
          weatherIcon.src = "./img/sunny.png";
        }

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
      });
  };

  // async function checkWeather(city) {
  // const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  // if (response.status == 404) {
  //   document.querySelector(".error").style.display = "block";
  //   document.querySelector(".weather").style.display = "none";
  // } else {
  //   const data = await response.json();

  //   console.log(data);
  //   document.querySelector(".city").innerHTML = data.name;
  //   document.querySelector(".temp").innerHTML =
  //     Math.round(data.main.temp) + "°c";
  //   document.querySelector(".humidity").innerHTML =
  //     data.main.humidity + "%";
  //   document.querySelector(".wind").innerHTML = data.main.speed + " km/h";

  // if (data.weather[0].main == "Clouds") {
  //   weatherIcon.src = "clouds.png";
  // } else if (data.weather[0].main == "Clear") {
  //   weatherIcon.src = "clear.png";
  // } else if (data.weather[0].main == "Rain") {
  //   weatherIcon.src = "rain.png";
  // } else if (data.weather[0].main == "Mist") {
  //   weatherIcon.src = "sunny.png";
  // }

  //   document.querySelector(".error").style.display = "none";
  //           document.querySelector(".weather").style.display = "block";
  //         // }
  //       // }
  //       searchBtn.addEventListener("click", () => {
  //         checkWeather(searchBox.value);
  //       });
  //