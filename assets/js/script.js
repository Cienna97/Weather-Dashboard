
var searchBar = document.getElementById('searchBar');
var searchBtn = document.getElementById('searchBtn');
var cityContainer = document.querySelector('.one');

var weatherApiRootUrl = 'https://api.openweathermap.org';
var weatherApiKey = 'f6e7949c7164702382c89036e588b531';

var userForm = document.querySelector('#user-form');
var userInput = document.querySelector('#user-input');
var todayContainer = document.querySelector('#today');
var weatherContainer = document.querySelector('#weather');

cityName = document.getElementById('city-name')
currentTemp = document.getElementById('temp')
currentUVIndex = document.getElementById('uv-index')

var dateOne = document.getElementById('date-one');
var dateTwo = document.getElementById('date-two');
var dateThree = document.getElementById('date-three');
var dateFour = document.getElementById('date-four');
var dateFive = document.getElementById('date-five');
var dateSix = document.getElementById('date-six');
var dateSeven = document.getElementById('date-seven')


var tempOne = document.getElementById('one-temp');
var tempTwo = document.getElementById('two-temp');
var tempThree = document.getElementById('three-temp');
var tempFour = document.getElementById('four-temp');
var tempFive = document.getElementById('five-temp');
var tempSix = document.getElementById('six-temp');
var tempSeven = document.getElementById('seven-temp');

var searchHistoryContainer = document.getElementById('search-history');
var pastCities =  JSON.parse(localStorage.getItem("Search-History")) || []; 

function init() {
  console.log('pastCities', pastCities);
  if (pastCities.length !==0){
  pastCities.forEach(city => {
    var element = document.createElement("button");
  element.setAttribute('class', 'btn btn-secondary w-100');
  element.value = city
  element.addEventListener("click", function (event) {
    apiWeatherData(event.target.value);
  });
  element.textContent = city;
  searchHistoryContainer.appendChild(element);
  
  });
}
};


function renderButton() {
  if (!searchBar.value) {
    return;
  } else { 
    let searchCityHistory = searchBar.value;
    console.log(searchCityHistory);

    var element = document.createElement("button");
    element.value = searchBar.value;
    element.addEventListener("click", function (event) {
      apiWeatherData(event.target.value);
  });

  element.textContent = searchCityHistory;

  searchHistoryContainer.appendChild(element);
  if (pastCities.length >= 5) {
    pastCities.shift();
    pastCities.push(searchBar.value);
    searchHistoryContainer.textContent = '';
    init();
  } else {
    pastCities.push(searchBar.value);
  

//btn.setAttribute('info-search', searchHistory[i]);
//btn.textContent = searchHistory[i];
//searchHistoryContainer.append(btn);

localStorage.setItem("Search-History", JSON.stringify(pastCities))
}
}

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();

  renderButton();
  fetchWeather(searchBar.value);
})



function renderItems(city, data) {
  renderCurrentWeather(city, data.current, data.timezone);
  renderForecast(data.daily, data.timezone);
}


function fetchWeather(searchCity) {
    fetch(`${weatherApiRootUrl}/data/2.5/weather?q=${searchCity}&units=imperial&appid=${weatherApiKey}`)
    
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        renderItems(city, data);

        currentWeather(data, searchCity);

        fetch(`${weatherApiRootUrl}/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${weatherApiKey}`)
        
        .then(function (response) {
          return response.json
        })
        .then(function (data){

          currentUVIndex.innerHTML = 'UV Index: ${data.daily[0].uvi}';


          weatherForecast(data, 1, dateOne, tempOne);
          weatherForecast(data, 2, dateTwo, tempTwo);
          weatherForecast(data, 3, dateThree, tempThree);
          weatherForecast(data, 4, dateFour, tempFour);
          weatherForecast(data, 5, dateFive, temFive);
        });
      })
    
   
  };

  function currentWeather(data, searchCity) {
    cityName.innerHTML = '${data.name} --- ${new Date((data.dt * 1000)).toLocaleDateString("en-US)} --- <img src=${weatherApiRootUrl}/img/wn/${data.weather[0].icon}@2x.png>';
    currentTemp.innerHTML = 'Temp: ${data.main.temp} F';

    localStorage.setItem("Search History", searchCity)
  }

functionWeatherForcast(data, digit, date, temp) 
  date.innerHTML = `${new Date ((data.daily[digit].dt * 1000)).toLocaleDateString("en-US")}`;
  temp.innerHTML = `${data.daily[digit].temp.day} F`;
}



//ar getCityWeather = function() {
  

   //var response = fetch("apiUrl").then(function(response){
        //esponse.json().then(function(data){
     
   //



//getCityWeather();
init();
