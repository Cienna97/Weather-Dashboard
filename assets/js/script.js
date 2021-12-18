var searchHistory = [];
var weatherApiRootUrl = 'https://api.openweathermap.org';
var weatherApiKey = 'f6e7949c7164702382c89036e588b531';

var userForm = document.querySelector('#user-form');
var userInput = document.querySelector('#user-input');
var todayContainer = document.querySelector('#today');
var weatherContainer = document.querySelector('#weather');
var searchHistoryContainer = document.querySelector('#history');

//btn.setAttribute('info-search', searchHistory[i]);
//btn.textContent = searchHistory[i];
//searchHistoryContainer.append(btn);

localStorage.setItem("Search-History", JSON.stringify(history))


searchHistory

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
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&units=imperial&appid=6e7949c7164702382c89036e588b531`)
    
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        renderItems(city, data);
        console.log(data);

        currentWeather(data, searchedCity);

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=current,minutely,hourly,alerts&units=imperial&appid=6e7949c7164702382c89036e588b531`)
        
        .then(function (response) {
          return response.json
        })
        .then(function (data){
          console.log(data)

          currentUVIndex.innerHTML = 'UV Index: ${data.daily[0].uvi}';
        })
      })
   
  }




//ar getCityWeather = function() {
  

   //var response = fetch("apiUrl").then(function(response){
        //esponse.json().then(function(data){
     
   //



//getCityWeather();

