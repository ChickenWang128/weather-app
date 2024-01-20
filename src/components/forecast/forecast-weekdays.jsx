import { React, useContext } from 'react';
import { ForecastContext } from '../../App';
import HourlyForecastContainer from './hourly-forecast-container';

const ForecastWeekDays = () => {
  const forecast = useContext(ForecastContext);
  const uniqueDates = [];

  return (
    <div className='forecast-container'>
      {forecast.list.map((item) => {
        const date = item.dt_txt.split(' ')[0];

        if (!uniqueDates.includes(date)) {
          uniqueDates.push(date);

          return <HourlyForecastContainer key={date} date={date} />;
        }

        return null;
      })}
    </div>
  );
};

export default ForecastWeekDays;
