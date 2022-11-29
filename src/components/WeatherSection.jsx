import { useState, useEffect } from "react";
import axios from "axios";

const WeatherSection = ({ country }) => {

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${API_KEY}`


    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        axios
            .get(WEATHER_URL).then(response => {
                const apiResponse = response.data;
                setWeatherData([apiResponse])
                console.log(weatherData);
            })
    }, [])

    if (weatherData.length > 0) {
        return (
            <div>
                {/* <h3> Weather in {country.capital}</h3>
                <p>General condition: {weatherData.weather[0].description}</p>
                <p>Temperature: {weatherData.main.temp}</p>
                <p>Wind: {weatherData.wind.speed}</p> */}
                <h1>WEATHER DATA IS LOADED</h1>
            </div>
        )
    }

    return (
        <div>
            <h3> Weather in {country.capital}</h3>
            <p>Weather data could not be loaded</p>
        </div>
    )
}

export default WeatherSection;