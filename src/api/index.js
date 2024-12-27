const baseURL = "https://api.weatherapi.com/v1/current.json?key=b2eff16f714e40a0a0971449242712"
export const getweatherDataForCity = async(city)=>{
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json()
}

export const getweatherDataForLocation = async(lat,lon)=>{
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`)
    return await response.json()
}