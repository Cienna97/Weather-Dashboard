
var searchBar = document.getElementById('searchBar');
var searchBtn = document.getElementById('searchBtn');var weatherApiRootUrl = 'https://api.openweathermap.org';
var weatherApiKey = 'f6e7949c7164702382c89036e588b531';

var userForm = document.querySelector('#user-form');
var userInput = document.querySelector('#user-input');
var todayContainer = document.querySelector('#today');
var weatherContainer = document.querySelector('#weather');

cityName = document.getElementById('city-name')
currentTemp = document.getElementById('temp')

var dateOne = document.getElementById('day-one-date');
var dateTwo = document.getElementById('day-two-date');
var dateThree = document.getElementById('day-three-date');
var dateFour = document.getElementById('day-four-date');
var dateFive = document.getElementById('day-five-date');
var tempOne = document.getElementById('one-temp');
var tempTwo = document.getElementById('two-temp');
var tempThree = document.getElementById('three-temp');
var tempFour = document.getElementById('four-temp');
var tempFive = document.getElementById('five-temp');

var searchHistoryContainer = document.getElementById('search-history');
var pastCities  =  JSON.parse(localStorage.getItem("Search-History")) || []; 




//btn.setAttribute('info-search', searchHistory[i]);
//btn.textContent = searchHistory[i];
//searchHistoryContainer.append(btn);

localStorage.setItem("Search-History", JSON.stringify(history))




var displayWeather = function(weather) {
  console.log(weather);
}


var gerCityWeather = function(city) {
};

function renderItems(city, data) {
  renderCurrentWeather(city, data.current, data.timezone);
  renderForecast(data.daily, data.timezone);
}


function fetchWeather(searchedCity) {
    fetch(`${weatherApiRootUrl}/data/2.5/weather?q=${searchedCity}&units=imperial&appid=${weatherApiKey}`)
    
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        renderItems(city, data);
        console.log(data);

        currentWeather(data, searchedCity);

        fetch(`${weatherApiRootUrl}/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${weatherApiKey}`)
        
        .then(function (response) {
          return response.json
        })
        .then(function (data){
          console.log(data)

          currentUVIndex.innerHTML = 'UV Index: ${data.daily[0].uvi}';


          weatherForecast(data, 1, dateOne, symbolOne, tempOne, windOne, humidityOne);
  
        });
      })
   
  }




//ar getCityWeather = function() {
  

   //var response = fetch("apiUrl").then(function(response){
        //esponse.json().then(function(data){
     
   //



//getCityWeather();

