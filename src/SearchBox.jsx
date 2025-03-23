import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBox.css";
import { useState } from 'react';
import InfoBox from './InfoBox';
import { red } from '@mui/material/colors';

export default function SearchBox({updateInfo}){
  let [city , setCity ] = useState("");
  let [error , setError ] = useState(false);
  const API_KEY = "399e821f03aefab424bc62a68ceb5a6e";

  let getWeatherInfo = async () => {
    try{
  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
 
    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
  
    console.log(result);
    return result;
  }catch(err){
    throw err;
  }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit =async (event) =>{
    try {
    event.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    }catch(err){
      setError(true);
    }
  }
    return (
        <div className='SearchBox'> 
          <form onSubmit={handleSubmit}>
          <TextField id="city" 
          label="City Name"  
          variant="standard" 
          value={city} 
          onChange={handleChange}
          required/>
          <br /><br />
          <Button 
          variant="contained" 
          type='submit' 
          startIcon={<SearchIcon/>}
          > Search</Button>
          {error && <p style={{color: "red"}}>No such place in our API</p>}
          </form>
        </div>
    );
};