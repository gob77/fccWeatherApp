  var currentWeather;
  var forecastWeather;
  var c = function(pos){
      lat = parseFloat(pos.coords.latitude).toFixed(2);
      lon = parseFloat(pos.coords.longitude).toFixed(2);
      getWeather(lat, lon, renderWeather);
    }



function getLocation(){
  navigator.geolocation.getCurrentPosition(c);
  return false;
}

function getWeather(lat, lon, callback){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        currentWeather = JSON.parse(xhr.responseText);
        getFormattedDate(currentWeather.dt*1000);
        document.getElementById("location").innerHTML = currentWeather.name + " , " + currentWeather.sys.country;
        document.getElementById("weather").innerHTML = getFormattedDate(currentWeather.dt) + "Temp: " + currentWeather.main.temp + " Cº";
        document.getElementById("weather").classList.add("celsius");
        document.getElementById("weather-description").innerHTML = currentWeather.weather[0].description;
        callback(currentWeather);
        if(currentWeather.weather[0].description == "few clouds"){
          document.getElementById("weather-background").style.backgroundImage = "url('img/few_clouds.jpg')"
        }
    }
  }
  xhr.open('GET', "https://fcc-weather-api.glitch.me//api/current?lon=" + lon + "&lat=" + lat, true);
  xhr.send(null);
}

function renderWeather(currentWeather) {
  var iconTpl = getWeatherTemplate(currentWeather.weather[0].main);
  document.getElementById("weather-icon").innerHTML = iconTpl;
}

function celsiusToFarenheit() {
  // debugger;
  var weatherElement = document.getElementById("weather");
  if(weatherElement.classList.contains("celsius")) {
    weatherElement.innerHTML = getFormattedDate(currentWeather.dt) +  parseFloat(currentWeather.main.temp * 1.8 + 32).toFixed(2) + " Fº";
  }
  else {
    weatherElement.innerHTML = getFormattedDate(currentWeather.dt) + currentWeather.main.temp + " Cº";
  }
  weatherElement.classList.toggle("celsius")
  weatherElement.classList.toggle("farenheit")
}

function getFormattedDate(date){
  var fullDate = new Date(date);
      date = fullDate.getDate(),
      month = fullDate.getMonth() + 1,
      year = fullDate.getFullYear();
      days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      dayOfWeek = days[fullDate.getDay()]
      return dayOfWeek + " - " + date + " / " + "0" + month + " / " + year + " ";
}

var CtoF = document.getElementById("CtoF");
CtoF.addEventListener("click", celsiusToFarenheit);

document.addEventListener("DOMContentLoaded", getLocation);
