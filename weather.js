var weathers = {
  "Rain": '<div class="icon rainy"> '+
              ' <div class="cloud"></div>'+
              '  <div class="rain"></div>'+
              '</div>'
  ,
  "Snow":  '<div class="icon flurries"> '+
              ' <div class="cloud"></div>'+
              '  <div class="snow">'+
              '    <div class="flake"></div>'+
              '    <div class="flake"></div>'+
              '  </div>'+
              '</div>'
  ,
  "Clear": '<div class="icon sunny"> '+
              '<div class="sun"> '+
                '<div class="rays"></div> '+
              '</div> '+
            '</div>'
  ,
  "Thunderstorm": '<div class="icon Thunderstorm"> '+
                    '<div class="cloud"></div> '+
                    '<div class="lightning"> '+
                      '<div class="bolt"></div> '+
                      '<div class="bolt"></div> '+
                    '</div> '+
                  '</div>'
  ,
    "Storm": '<div class="icon Thunderstorm"> '+
                    '<div class="cloud"></div> '+
                    '<div class="lightning"> '+
                      '<div class="bolt"></div> '+
                      '<div class="bolt"></div> '+
                    '</div> '+
                  '</div>'
  ,
  "Clouds": '<div class="icon cloudy"> '+
              '<div class="cloud"></div> '+
              '<div class="cloud"></div> '+
            '</div>'
  };

function getWeatherTemplate(weatherKey){
  return weathers[weatherKey] || "No weather found";
}


// <div class="icon rainy">
//   <div class="cloud"></div>
//   <div class="rain"></div>
// </div>