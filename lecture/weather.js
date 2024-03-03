let weather = {
    "message": "accurate",
    "cod": "200",
    "count": 1,
    "list": [
        {
            "id": 2643743,
            "name": "London",
            "coord": {
                "lat": 51.5085,
                "lon": -0.1258
            },
            "main": {
                "temp": 7,            // current temp
                "pressure": 1012,
                "humidity": 81,
                "temp_min": 5,
                "temp_max": 8
            },
            "dt": 1485791400,
            "wind": {
                "speed": 4.6,     // wind speed
                "deg": 90
            },
            "sys": {
                "country": "GB"
            },
            "rain": null,
            "snow": null,
            "clouds": {
                "all": 90
            },
            "weather": [
                {
                    "id": 701,
                    "main": "Mist",
                    "description": "mist",   // description
                    "icon": "50d"
                },
                {
                    "id": 300,
                    "main": "Drizzle",
                    "description": "light intensity drizzle",  // description
                    "icon": "09d"
                }
            ]
        }
    ]
}

let weatherList = weather.list
//console.log(weatherList)

let weatherInfo = weatherList[0]
//console.log(weatherInfo)

let main = weatherInfo.main
//console.log(main)

let currentTemp = main.temp
//console.log(currentTemp)

let currentTempAgain = weather.list[0].main.temp
console.log('Current temp: ', currentTempAgain)

let windSpeed = weather.list[0].wind.speed
console.log('Wind speed: ', windSpeed)

let weatherDescriptionArray = weather.list[0].weather

let descriptions = []
weatherDescriptionArray.forEach( function ( weatherDescription ) {
    //console.log(weatherDescription.description)
    descriptions.push(weatherDescription.description)
})

let descriptionsString = descriptions.join(', ')
console.log(descriptionsString)