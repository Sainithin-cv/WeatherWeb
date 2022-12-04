

function display(){
  const city = document.getElementById('cityName').value;
  console.log(city)
  const res=fetch('http://api.openweathermap.org/geo/1.0/direct?q='+ city +'&appid=8b8184fee8b73c7e9e2a1abaa1bb9e90')
    	.then(response => response.json())
    	.then(data => {
      let lat = Object.values(data)[0].lat;
      let long = Object.values(data)[0].lon;
      const newres=fetch('https://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ long +'&appid=8b8184fee8b73c7e9e2a1abaa1bb9e90')
          .then(response => response.json())
          .then(data => {
            let temp = Object.values(data)[3].temp - 273;
            let hum = Object.values(data)[3].humidity;
            let wind = Object.values(data)[5].speed;
            document.getElementById("result").innerHTML = 'Temperature - '+ Math.round(temp) + ' °C <br> humidity - ' + hum+'% <br> Wind Speed - '+ wind+' km/hr';
          })
          .catch(err => console.error(err))
      })
      .catch(err => console.error(err))
}
