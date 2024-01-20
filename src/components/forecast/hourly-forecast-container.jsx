import { React, useContext } from 'react';
import { ForecastContext } from '../../App';
import HourlyForecast from './hourly-forecast';
import './forecast.css';

const HourlyForecastContainer = ({ date, day }) => {
  const forecast = useContext(ForecastContext);

  return (
    <>
      <h1>{date.slice(5)}</h1>
      <div className='hourly-card-container'>
        {forecast.list.map((item) => {
          const time = item.dt_txt.split(' ')[1];
          if (item.dt_txt.includes(date)) {
            return (
              <HourlyForecast
                key={item.dt_txt}
                time={time}
                icon={item.weather[0].icon}
                temp={item.main.temp}
                desc={item.weather[0].description}
              />
            );
          }

          return null;
        })}
      </div>
    </>
  );
};

export default HourlyForecastContainer;
