// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=b5ec6bfbb861786ec913d6b3c2c3e64d
fetch(
  "http://api.openweathermap.org/data/2.5/weather?id=524901&appid=b5ec6bfbb861786ec913d6b3c2c3e64d"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (wheathers) {
    console.log(wheathers);
    let city = (document.querySelector(".title__city").innerHTML =
      wheathers.name);
    let degrees = (document.querySelector(".city__subtitle").innerHTML =
      Math.round(wheathers.main.temp - 273) + "&deg;");
    let desCrip = document.querySelector('.img__subtext').textContent = wheathers.weather[0]['main'];
    let idIcon = wheathers.weather[0]['icon'];
    console.log(idIcon)
    let img = document.getElementById('img').innerHTML = `<img src="https://openweathermap.org/img/wn/04n@2x.png">`

  })
  .catch(function () {});

  // https://openweathermap.org/img/wn/04n@2x.png


//   Object { coord: {…}, weather: (1) […], base: "stations", main: {…}, visibility: 10000, wind: {…}, clouds: {…}, dt: 1652645376, sys: {…}, timezone: 10800, … }
// ​
// base: "stations"
// ​
// clouds: Object { all: 100 }
// ​
// cod: 200
// ​
// coord: Object { lon: 37.6156, lat: 55.7522 }
// ​
// dt: 1652645376
// ​
// id: 524901
// ​
// main: Object { temp: 283.23, feels_like: 281.94, temp_min: 281.01, … }
// ​
// name: "Moscow"
// ​
// sys: Object { type: 2, id: 2018597, country: "RU", … }
// ​
// timezone: 10800
// ​
// visibility: 10000
// ​
// weather: Array [ {…} ]
// ​​
// 0: Object { id: 804, main: "Clouds", description: "overcast clouds", … }
// ​​
// length: 1
// ​​
// <prototype>: Array []
// ​
// wind: Object { speed: 4.19, deg: 305, gust: 9.62 }
// ​
// <prototype>: Object { … }