var getCityWeather = function() {
    console.log("function was called");

    fetch("https://api.openweathermap.org/data/2.5/onecall?").then(function(response){
        console.log("inside", repsonse)
    });
    
    console.log("outside");
};


getCityWeather();
