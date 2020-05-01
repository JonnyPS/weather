import React from 'react';

export function Current( props ) {
  return (
    <div className="current-weather-container">
      <h2>The current weather is {props.currentWeather.condition.text}</h2>
      <img src={props.currentWeather.condition.icon} alt={props.currentWeather.condition.text} />
    </div>
  )
}