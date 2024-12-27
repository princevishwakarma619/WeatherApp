import React from "react";
import { useWeather } from "../Context/Weather";


const Card = ()=>{
    const weather = useWeather();
    return(
        <div>
            <img src = {weather?.data?.current?.condition?.icon} />
            <h2>{weather.data?.current?.temp_c} degree C</h2>
            <h3>{weather.data?.location?.name}, {weather.data?.location?.region}, {weather.data?.location?.country}</h3>
        </div>
    )
}

export default Card;