
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
        console.log(description);
        //Get JSON data and use JS to display on screen
        $.getJSON(api, function(data){

          description = data.weather[0].description;
          location = data.name + ',' + ' ' + data.sys.country;
          temperature = Math.round(((data.main.temp) * 1.8 + 32));
          temperatureCelcius = Math.round(data.main.temp);
          document.querySelector('.description').innerHTML = description;
          document.querySelector('.location').innerHTML = location;
          document.querySelector('.temperature').innerHTML = temperature;


          //*******DISPLAY FOR ICON, NEEDS TO GO INSIDE OF JSON OR DESCRPTION IS UNDEFINED, UNTIL DATA IS GOTTEN FROM JSON

          if (description.includes('snow') || description.includes('flurries')) {
            icon.classList.add('fa-snowflake');
          }else if (description.includes('rain') || description.includes('shower') || description.includes('storm')) {
            icon.classList.add('fa-tint');
          }else if (description.includes('cloud') || description.includes('cast') || description.includes('fog')) {
            icon.classList.add('fa-cloud');
          }else {
            icon.classList.add('fa-sun');
          }
        });

        //*****DISPLAYS TEMPERATURE MEASUREMENT AND ICONS WHEN PAGE LOADS INSTEAD OF BEFORE EVERYTHING ELSE
        let measurement = document.querySelector('.measurement');
          measurement.style.display = 'block';

        let icon = document.getElementById('icon');
        icon.style.display = 'block';


        //*******EVENT LISTENER FOR CONVERSION TO CELCIUS**********//

        document.querySelector('.measurement').addEventListener('click', function(){

          if (document.querySelector('.measurement').textContent !== 'Celcius') {
            document.querySelector('.measurement').textContent = 'Celcius';
            document.querySelector('.temperature').innerHTML = temperatureCelcius;
          }else {
            document.querySelector('.measurement').textContent = 'Farenheit';
            document.querySelector('.temperature').innerHTML = temperature;
          }
        });
      });
    }
});
