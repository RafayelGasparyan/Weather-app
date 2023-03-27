import logo from './logo.svg';
import './App.css';
import Search from './componets/Search/Search'
import { Weather } from './componets/Weather/Weather';
import { WEATHER_API_URL,WEATHER_API_KEY } from './api';
import { useState } from 'react';
import {Forcast} from './componets/Forcast/Forcast'


function App() {
  const [currentWeather,setCurrentWheater] = useState(null);
  const [forecast,setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat ,lon] = searchData.value.split(" ")
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecasteFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch,forecasteFetch])
    .then( async (response)=> {
      const weatherResponse = await response[0].json()
      const forecastResponse = await response[1].json()

      setCurrentWheater({ city: searchData.label, ...weatherResponse});
      setForecast({ city:searchData.label, ...forecastResponse})
    })
    .catch((error)=> console.log(error))
  }

  console.log(currentWeather);
  console.log(forecast)
  
  return (
    <>
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <Weather data={currentWeather}/>}
      {forecast && <Forcast data={forecast}/>}
    </div>  
    </>
  );
}

export default App;
