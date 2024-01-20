import { useState, createContext } from 'react';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import ForecastWeekDays from './components/forecast/forecast-weekdays';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import './App.css';

export const ForecastContext = createContext(null);

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  console.log(WEATHER_API_KEY);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      <ForecastContext.Provider value={forecast}>
        {forecast && <ForecastWeekDays />}
      </ForecastContext.Provider>
    </div>
  );
}

export default App;

