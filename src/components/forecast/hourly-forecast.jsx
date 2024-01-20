import { React } from 'react';
import './forecast.css';

// structure component to create 3hr cards
const HourlyForecast = ({ time, icon, temp, desc }) => {
  return (
    <div className='hourly-card'>
      <span className='hourly-time'>{time}</span>
      <img className='hourly-icon' src={`icons/${icon}.png`} alt='weather' />
      <span className='hourly-temp'>{Math.round(temp * (9 / 5) + 32)}°F</span>
      <span className='hourly-desc'>{desc}</span>
    </div>
  );
};

export default HourlyForecast;
