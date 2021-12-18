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


function fetchWeather() {
    var  lat = 33.44;
    var  lon = 94.04;
    //var city = location.name;
    var apiUrl = `${weatherApiRootUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${weatherApiKey}`;
    fetch(apiUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        renderItems(city, data);
        console.log(data)
      })
      .catch(function (err) {
        console.error(err);
      });
  }

  function fetchCoords(search) {
    var apiUrl ='${weatherApiRootUrl}/geo/1.0/direct?q=${search}&limit=5&appid=${weatherApiKey}';

    fetch(apiUrl)
    .then(function (res) {
      return res.json();

    })
  }


var getCityWeather = function() {
    console.log("function was called");

   var response = fetch("apiUrl").then(function(response){
        response.json().then(function(data){
            console.log(data);
        });
    }); 
    
    
};



getCityWeather();

