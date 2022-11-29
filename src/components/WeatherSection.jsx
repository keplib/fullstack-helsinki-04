import { useState, useEffect } from "react";
import axios from "axios";

const WeatherSection = ({ country }) => {

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${API_KEY}`

    const [weatherData, setWeatherData] = [{}];

    useEffect(() => {
        axios
            .get(WEATHER_URL).then(response => {
                // setWeatherData(response.data)
                console.log(response.data);
            })
    }, [])

    return (
        <div>
            <p>WeatherSection</p>
            <h3> Weather in {country.capital}</h3>
        </div>
    )
}

export default WeatherSection;