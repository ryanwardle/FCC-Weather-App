
$(document).ready(function(){

//Get Lat and Lon Coords.
  let lat, lon;
  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        lat = position.coords.latitude;
        lon = position.coords.longitude;

        //Put Coords into API
        let api = "https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+lon;
        let description, location, temperature, temperatureCelcius;

        //Get JSON data and use JS to display on screen
        $.getJSON(api, function(data){

          description = data.weather[0].description;
          location = data.name + ',' + ' ' + data.sys.country;
          temperature = Math.round(((data.main.temp) * 1.8 + 32));
          temperatureCelcius = Math.round(data.main.temp);

          document.querySelector('.description').innerHTML = description;
          document.querySelector('.location').innerHTML = location;
          document.querySelector('.temperature').innerHTML = temperature; //NEED TO FINISH/ CORRECT TEMPERATURE, CONVERT F TO C AND F/C WORD DISPLAY
        });
      });
    }
});
