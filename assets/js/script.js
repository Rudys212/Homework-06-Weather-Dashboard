var currentSec = document.querySelector(".currentSec");
var currentResults = document.querySelector("#currentWeather");
var currentCitySearch = document.querySelector(".cityInput");
var searchResults = document.querySelector("#searchHistory");
var searchButton = document.querySelector("#searchBtn");
var searchForm = document.querySelector("#searchForm");
var fiveDayForecast = document.querySelector("#weatherForecast");
var iconPic = document.querySelector("#icon");
var fiveIconPic = document.querySelector("#fiveIcon");

var searchHistory = [];

// submit search
var currentWeatherSearch = function (event) {
  event.preventDefault();

  var currentCity = currentCitySearch.value.trim();

  if (currentCity) {
    searchedWeather(currentCity);

    currentResults.textContent = "";
    currentCitySearch.textContent = "";
  } else {
    console.log("please enter the city you want to search");
  }
  var saveSearch = function () {
    localStorage.setItem(
      "searchHistory",
      JSON.stringify(JSON.stringify(searchHistory))
    );
  };

  saveSearch();
  // storeCurrentSearch(currentCity);
  fiveDayWeather(currentCity);
  pastSearch(currentCity);
  // showWeather(currentCity);
};

function searchedWeather(city) {
  // const apiKey = "0e0813c191c9f9bae9d97919acde6e10";
  var apiWeatherReq = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0e0813c191c9f9bae9d97919acde6e10&units=imperial`;

  fetch(apiWeatherReq).then(function (response) {
    response.json().then(function (data) {
      showWeather(data, city);
    });
  });
}
// past search button event handler

function pastSearch(event) {
  var currentCity = event.target.getAttribute("historyCities");
  if (currentCity) {
    showWeather(currentCity);
  }
}

// search history buttons
var latestSearches = function (latestSearches) {
  historySearchBtn = document.createElement("button");
  historySearchBtn.textContent = latestSearches;
  historySearchBtn.setAttribute("historyCities", searchHistory);
  historySearchBtn.setAttribute("type", "button");
  historySearchBtn.setAttribute("class", "btn btn-outline-success");

  historySearch.appendChild(historySearchBtn);
};

// current weather display
var showWeather = function (weather, citySearch) {
  currentSec.textContent = "";
  currentResults.textContent = citySearch;

  var dayname = new Date(weather.dt * 1000);
  var day = document.createElement("p");
  day.textContent = dayname.toLocaleDateString("en-US");

  var iconData = weather.weather[0].icon;
  var icon = "https://openweathermap.org/img/wn/" + iconData + "@2x.png";
  iconPic.setAttribute("src", icon);

  var humidity = document.createElement("p");
  humidity.textContent = "Humidity: " + weather.main.humidity + "%";

  var windSpeed = document.createElement("p");
  windSpeed.textContent = "Wind speed:" + weather.wind.speed + "mph";

  var temperature = document.createElement("p");
  temperature.textContent = "Current Temperature: " + weather.main.temp + "°F";

  currentSec.appendChild(temperature);
  currentSec.appendChild(humidity);

  currentSec.appendChild(windSpeed);
  currentResults.appendChild(day);
};

fiveDayWeather = function (city) {
  const apiKey = "0e0813c191c9f9bae9d97919acde6e10";
  var forecastReq = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
  var forecastResBody = document.getElementById("forecastResBody");

  fetch(forecastReq).then(function (response) {
    response.json().then(function (data) {
      for (var i = 0; i < data.list.length; i += 8) {
        var fiveDays = document.createElement("div");
        fiveDays.textContent = "Five Day Forecast";
        fiveDays.textContent.classList = "list-group-item";

        var iconInfo = data.list[i].weather[0].icon;
        var icon = "https://openweathermap.org/img/wn/" + iconInfo + "@2x.png";
        fiveIconPic.setAttribute("src", icon);

        var dayname = new Date(data.list[i].dt * 1000);
        var dates = document.createElement("p");
        dates.textContent = dayname.toLocaleDateString("en-US");

        fiveDayForecast.append(dates);

        var temperature = document.createElement("p");
        temperature.textContent = "Temperature" + data.list[i].main.temp + "°f";
        temperature.classList = "list-group-item";
        fiveDayForecast.append(temperature);

        var humidity = document.createElement("p");
        humidity.textContent = "Humidity: " + data.list[i].main.humidity;
        humidity.classList = "list-group-item";
        fiveDayForecast.append(humidity);

        var windSpeed = document.createElement("p");
        windSpeed.textContent =
          "Wind Speed: " + data.list[i].wind.speed + "MPH";
        windSpeed.classList = "list-group-item";
        fiveDayForecast.append(windSpeed);
      }
    });
  });
};

displayFiveDayWeather = function (displayFiveDayWeather) {
  var dates = document.createElement("div");
  fiveDayForecast.textContent = "";
  fiveDayForecast.textContent.classList = displayFiveDayWeather;
};

searchButton.addEventListener("click", currentWeatherSearch);
// currentCitySearch.addEventListener("click", showWeather);
historySearch.addEventListener("click", pastSearch);
