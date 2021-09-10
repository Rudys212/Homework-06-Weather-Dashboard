var searchHistory = [];
// var for the DOM manipulation
var date = moment().format("ll");
var searchSection = document.getElementById("search-section");
var searchForm = document.getElementById("searchForm");
var searchTitle = document.getElementById("searchLabel");
var searchButton = document.getElementById("search");
var resetButton = document.getElementById("resetBtn");
var searchResults = document.getElementById("searchHistory");
var resultsSec = document.getElementById("resultsSection");
var currentResults = document.getElementById("currentWeather");
var weeklyWeather = document.getElementById("weatherForecast");
var weatherForecastResults = document.getElementById("forecastResults");

// weather forecast variables for items in main section of forecast
var cityWeather = document.createElement("div");
var cityInfo = document.createElement("div");
var nameOfCity = document.createElement("div");
var currentTemp = document.createElement("div");
var humidityInfo = document.createElement("div");
var windInfo = document.createElement("div");
var uvIndexInfo = document.createElement("h3");
var uvSection = document.createElement("div");

var submitSearch = function (event) {
  event.preventDefault();
  var city = nameOfCity.nodeValue.trim();
  if (city) {
    forecastRequest(city);
    fiveDayForecast(city);
    cities.unshift({ city });
    nameOfCity.value = "";
  } else {
    alert("Please enter a city");
  }
  saveSearchReq();
  searchHistory(city);
};
var saveSearchReq = function () {
  localStorage.setItem("cities", JSON.stringify(cities));
};

// function to fetch forecast from API

var forecastRequest = function (searchLabel) {
  var apiKey = "0e0813c191c9f9bae9d97919acde6e10";
  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}`;
  fetch(weatherApi).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      displayForecast(data, city);
    });
  });
};

var displayForecast = function (weather, searchCity) {
  resultsSec.textContent = "";
  searchSection.textContent = searchCity;
  // append results
};
// function to render forecast
// function for UV index
var currentDay = document.createElement("span");
currentDay.textContent = "(" + moment(weather.dt.value);
// event listener for submit button and searchcontainer
