var searchHistory = [];
var weatherApiRootUrl = 'https://api.openweathermap.org';
var weatherApiKey = 'f6e7949c7164702382c89036e588b531';

var searchForm = document.querySelector('#search-form');
var searchInput = document.querySelector('#search-input');
var todayContainer = document.querySelector('#today');
var weatherContainer = document.querySelector('#weather');
var searchHistoryContainer = document.querySelector('#history');


function fetchCityWeather(location) {
    var { lat } = location;
    var { lon } = location;
    var city = location.name;
    var apiUrl = `${weatherApiRootUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${weatherApiKey}`;
  
    fetch(apiUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        renderItems(city, data);
      })
      .catch(function (err) {
        console.error(err);
      });
  }

//var getCityWeather = function() {
    //console.log("function was called");

   //var response = fetch("").then(function(response){
        //response.json().then(function(data){
            //console.log(data);
        //});
   // }); 
    
    
//};


//getCityWeather();
