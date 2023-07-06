 // key = ed3690ac9029a6c00c177b8fd3f4df47
  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=ed3690ac9029a6c00c177b8fd3f4df47&units=metric

//var inputValue = document.getElementById("input").value ; 
// console.log(inputValue);
//  const url =`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=ed3690ac9029a6c00c177b8fd3f4df47&units=metric` ;
const searchBtn = document.getElementById("btn");
const temperature  = document.getElementsByClassName("temp")
const humidity = document.getElementsByClassName("humidity");
const wind = document.getElementsByClassName("wind");
const city = document.getElementsByClassName("city");
const weatherIcon = document.querySelector(".weather-icon");


 async function checkWeather(city){
    var inputValue = document.getElementById("input").value ; 

  const url =`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=ed3690ac9029a6c00c177b8fd3f4df47&units=metric` ;


    const response = await fetch(url);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + "km/h";

  //  document.querySelector(".img").innerHTML =`<img src="images/${data.weather.main}.png" class="weather-icon" alt="">`; 
    
    if(data.weather[0].main ==='Clouds'){
        weatherIcon.src = "images/clouds.png"
    }
    if(data.weather[0].main ==='Clear'){
        weatherIcon.src = "images/clear.png"
    }
    if(data.weather[0].main ==='Rain'){
        weatherIcon.src = "images/rain.png"
    }
    if(data.weather[0].main ==='Drizzle'){
        weatherIcon.src = "images/drizzle.png"
    }
    if(data.weather[0].main ==='Mist'){
        weatherIcon.src = "images/mist.png"
    }

}

searchBtn.addEventListener("click", ()=>{
    checkWeather();

})

// searchBtn.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") {
//         checkWeather();
//     }
// });



