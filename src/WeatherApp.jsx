import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo ] = useState(
        {
            city:"Lucknow",
            feelsLike : 24.35,
            humidity : 31,
            temp : 24.99,
            tempMax : 24.99,
            tempMin : 24.99,
            weather : "haze"
   });
   let updateInfo = (newInfo) =>{
    setWeatherInfo(newInfo);
   }
    return(
        <div style={{textAlign:"center"}}>
            <h3>Weather App By Prasant</h3>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}