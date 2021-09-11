var searchHistory = [];
// var for the DOM manipulation

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

var request = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=0e0813c191c9f9bae9d97919acde6e10`;
var forecastReq = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=0e0813c191c9f9bae9d97919acde6e10`;

const dates = moment().format("dddd, MMM Do YYYY");

var cityName = document.querySelector(".cityInput");

// submit new search w/ search button
var submitSearch = function (event) {
  event.preventDefault();

  var findCity = cityName.value.trim();

  if (findCity) {
    request(findCity);

    currentResults.textContent = "";
    cityName.textContent = ";";
    getData();
  } else {
    alert("Please enter a city");
  }
};

// fetch weather

function getData(cityName) {
  const request = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`;
  $(".currentSec").css("visibility", "visible");

  fetch(request)
    .then((res) => res.json())
    .then((data) => {
      $(".currentSec").empty();

      let card = $("<div>").addClass("cardBody");
      let currentWeather = $("<h2>")
        .addClass("currentWeather")
        .text(`${data.cityName}`);
      let title = $("<h4>").addClass("dates").text(dates);
      let temp = $("<p>")
        .addClass("currentTemp")
        .text(`Temperature: ${data.list[0].temp}°F`);
      let wind = $("<p>").addClass(`Wind: ${data.list[0].wind.speed}M/H`);
      card.append(currentWeather, title, temp, wind);
      $(".currentSec").append(card);
    });

  var saveSearchReq = function () {
    localStorage.setItem(
      "searchHistory",
      JSON.stringify(JSON.stringify(searchHistory))
    );
  };
  saveSearchReq();
  searchHistory(city);
}

// function to render forecast
// function for UV index
// var currentDay = document.createElement("span");
// currentDay.textContent = "(" + moment(weather.dt.value);
// event listener for submit button and searchcontainer

// fetch Icons
var iconcode = forecastReq[0].icon;
var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
$("#wicon").attr("src", iconurl);

// fetch the 5 day forecast

// var fiveDayForecast = function (res) {
//   fetch()(findCity);
// };

searchButton.addEventListener = ("click", submitSearch);
// resetButton.addEventListener("click", resetClick);
