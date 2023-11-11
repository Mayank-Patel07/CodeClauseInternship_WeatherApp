console.log("Starting")

const serach = document.querySelector(".search-box input")
const searhBtn = document.querySelector(".search-box button")
const Icons = document.querySelector(".Icons")
const key = ""  //Use your API key
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const WeatherData = async (cityname) => {
    try {

        const response = await fetch(url + cityname + `&appid=${key}`)
        const data = await response.json()

        if (response.status == 404 && serach.value === "") {
            document.querySelector(".invalid").style.display = "block"
            document.querySelector(".weather-box").style.display = "none"
        } else {

            console.log(data)
            document.querySelector(".city").innerHTML = data.name
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
            document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C"
            document.querySelector(".WindSpeed").innerHTML = data.wind.speed + "KM/H";
            document.querySelector(".cont").innerText = `(${data.sys.country})`

            if (data.weather[0].main == "Clouds") {
                Icons.src = "Images/clouds.png"

            } else if (data.weather[0].main == "Clear") {
                Icons.src = "Images/clear.png"
            }
            else if (data.weather[0].main == "Drizzle") {
                Icons.src = "Images/drizzle.png"
            }
            else if (data.weather[0].main == "Mist") {
                Icons.src = "Images/mist.png"
            }
            else if (data.weather[0].main == "Rain") {
                Icons.src = "Images/rain.png"
            }

            document.querySelector(".invalid").style.display = "none"
            document.querySelector(".weather-box").style.display = "block"

        }
    } catch (error) {
        console.log(error)
    }
}

searhBtn.addEventListener("click", () => {
    WeatherData(serach.value)

})