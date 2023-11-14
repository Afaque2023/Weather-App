
const API_key = `74e5f34380b04e8f8cee571f03ea9ec3`;
let search = document.getElementById("inp");
let deg = document.getElementById("degree");
let type = document.getElementById("type");

// The 'get' function is responsible for fetching weather data from the OpenWeatherMap API.
const get = async function (input) {
  // Use the fetch function to send a request to the API.
  let getData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_key}&units=metric`
  );

  // Parse the response data as JSON. 
  let dt = await getData.json();

  // Check the 'cod' property in the response to determine if the request was successful.
  if (dt.cod == 400) {
    alert("Please Enter City Name");
  }
  if (dt.cod == 404) {
    alert("Please Enter Correct City Name");
  }

  // Display the city name, temperature, and weather type.
  document.getElementById("city").innerHTML = input;
  document.getElementById("degree").innerHTML = Math.round(dt.main.temp) + " ";
  document.getElementById("type").innerHTML = dt.weather[0].main;
  search.value = "";

  // Set the background image and weather image based on the weather condition.
  let weather = dt.weather[0].main;
  if (weather == "Clear") {
    document.getElementById("img").src = "clear-sky.png";
    document.body.style.backgroundImage = "url('./Img/clear.jpg')";
    document.body.style.backgroundSize = "100% 100%";
  } else if (weather == "Clouds") {
    document.getElementById("img").src = "./Img/clouds.png";
    document.body.style.backgroundImage = "url('./Img/cld.jpg')";
    document.body.style.backgroundSize = "100% 100%";
  } else if (weather == "Rain") {

    document.getElementById("img").src = "./Img/rain.png";


    document.body.style.backgroundImage = "url('./Img/rn.jpg')";
    document.body.style.backgroundSize = "100% 100%";
  } else if (weather == "strom") {

    document.getElementById("img").src = "./Img/strom.png";


    document.body.style.backgroundImage = "url('./Img/strom.jpg')";
    document.body.style.backgroundSize = "100% 100%";
  } else if (weather == "Haze") {

    document.getElementById("img").src = "./Img/clouds.png ";


    document.body.style.backgroundImage = "url('./Img/haze.jpg')";
    document.body.style.backgroundSize = "100% 100%";
  } else if (weather == "Snow") {

    document.getElementById("img").src = "./Img/rain.png ";


    document.body.style.backgroundImage = "url('./Img/snow.jpg')";
    document.body.style.backgroundSize = "100% 100%";
  } else if (weather == "Smoke") {

    document.getElementById("img").src = "./Img/clouds.png ";

    document.body.style.backgroundImage = "url('./Img/haze.jpg')";
    document.body.style.backgroundSize = "100% 100%";
  }
  // Other weather conditions follow a similar pattern.
};

// The 'myFun' function is called when the form is submitted.
function myFun(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  let input = search.value;
  get(input); // Call the 'get' function to fetch weather data.
}
