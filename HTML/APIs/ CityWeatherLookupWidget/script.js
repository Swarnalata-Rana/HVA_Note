let inputBox = document.getElementById("inputBox")
let btn = document.getElementById("btn")
let weatherSection = document.getElementById("weatherSection")
let cityName = document.getElementById("cityName")
let countryName = document.getElementById("countryName")
let temp = document.getElementById("temp")
let wideSpeed = document.getElementById("wideSpeed")

weatherSection.style.display = "none"

btn.addEventListener("click", function () {
    let query = inputBox.value.trim()
    inputBox.value = ""

    if (query === "") {
        alert("please write something")
    }
    fetchFirstApis(query)
})

async function fetchFirstApis(query) {
    try {
        let response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${query}`)
        let data = await response.json()
        
        if (data.results.length === 0) {
            alert("City not found")
            return
        }
        let latitudeNum = data.results[0].latitude
        let longitudeNum = data.results[0].longitude

        displayResults(data)
        fetchSecondApis(latitudeNum, longitudeNum)

    }
    catch (error) {
        console.log(error)
    }
}

function displayResults(data) {
    cityName.innerText = `Name: ${data.results[0].name}`
    countryName.innerText = `Country: ${data.results[0].country}`
}

async function fetchSecondApis(query1, query2) {
    try {
        let response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${query1}&longitude=${query2}&current_weather=true`)
        let data = await response.json()
        displayResults2(data)
    }
    catch (error) {
        console.log(error)
    }

}

function displayResults2(data) {
    temp.innerText = `Temperature: ${data.current_weather.temperature}`
    wideSpeed.innerText = `windspeed: ${data.current_weather.windspeed}`
    weatherSection.style.display = "block"

}