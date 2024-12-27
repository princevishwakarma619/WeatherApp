import { createContext, useContext,useState } from "react";
import { getweatherDataForCity,getweatherDataForLocation } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () =>{
    return useContext(WeatherContext)
}

export const WeatherProvider = (props)=>{
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null);

    const fetchData = async() =>{
        const response = await getweatherDataForCity(searchCity)
        setData(response);
    };

    const fetchCurrentUserLocationdata=()=>{
        navigator.geolocation.getCurrentPosition((position) =>{
            getweatherDataForLocation(
                position.coords.latitude,
                position.coords.longitude
            ).then((data) => setData(data))
        })
    
    }

    return <WeatherContext.Provider value={{searchCity,data,setSearchCity,fetchData,fetchCurrentUserLocationdata}}>
        {props.children}
    </WeatherContext.Provider>
}