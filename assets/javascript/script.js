var searchHistory = [];
// var for the DOM manipulation
var date = moment().format("ll");
var searchSection = document.getElementById("#search-section");
var searchForm = document.getElementById("#searchForm");
var searchTitle = document.getElementById("#searchLabel");
var searchButton = document.getElementById("#searchBtn");
var resetButton = document.getElementById("#resetBtn");
var searchResults = document.getElementById("#searchHistory");
var resultsSec = document.getElementById("#resultsSection");
var currentResults = document.getElementById("#currentWeather");
var weeklyWeather = document.getElementById("#weatherForecast");
var currentSec = document.querySelector(".currentSec");
var weatherForecastResults = document.getElementById("#forecastResults");

// weather forecast variables for items in main section of forecast
var cityWeather = document.createElement("div");
var cityInfo = document.createElement("div");
var nameOfCity = document.createElement("div");
var currentTemp = document.createElement("div");
var humidityInfo = document.createElement("div");
var windInfo = document.createElement("div");
var uvIndexInfo = document.createElement("h3");
var uvSection = document.createElement("div");

var apiKey = "0e0813c191c9f9bae9d97919acde6e10";
var request = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`;
var forecastReq = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;

var cityName = document.querySelector(".cityInput");

// submit new search w/ search button
var submitSearch = function (event) {
  event.preventDefault();

  var findCity = cityName.value.trim();

  if (findCity) {
    forecastRequest(findCity);

    currentResults.textContent = "";
    cityName.textContent = ";";
  } else {
    alert("Please enter a city");
  }

  // save history
  saveSearchReq();

  searchHistory(city);
};

var saveSearchReq = function () {
  localStorage.setItem("cities", JSON.stringify(cities));
};
// display current weather/display forecastReq by submitSearch event
var displayForecast = function (data, citySearch) {
  resultsSec.textContent = "";
  searchSection.textContent = searchCity;

  // append results
};
// function to render forecast
// function for UV index
var currentDay = document.createElement("span");
currentDay.textContent = "(" + moment(weather.dt.value);
// event listener for submit button and searchcontainer

// fetch the 5 day forecast

fiveDayForecast(findCity);

// function to fetch forecast from API
var forecastRequest = function (res) {
  fetch(request).then(function (response) {
    response.json().then(function (data) {
      displayForecast(res, data);
    });
  });
};

searchButton.addEventListener = ("click", submitSearch);
resetButton.addEventListener("click", resetClick());
