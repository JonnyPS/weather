import React from 'react';

export function Forecast( props ) {
 console.log('props', props.forecast[0])
return (
  <ul>
    {props.forecast.map( (index, i) => (
      <li key={index+i}>
        <img src={index.day.condition.icon} width={30} alt={index.day.condition.text} />
        <span>{index.day.condition.text}</span>&nbsp;{index.day.avgtemp_c} C&deg;</li>
    ))

    }
  </ul>
)
}