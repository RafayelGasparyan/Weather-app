import React from 'react'
import './Weater.css'

export const Weather = ({data}) => {
  return (
    <div className='weather'>
        <div className='top'>
            <div>
                <p className='city'>{data.city}</p>
                <p className='weather-decription'>{data.weather[0].description}</p>
            </div>
        </div>
        <div className='bottom'>
            <p className='tempertura'>{Math.round(data.main.temp)}°c</p>
            <div className='details'>
                <div className='parametr-row'>
                    <span className='parametr-label'>Details</span>
                </div>
                <div className='parametr-row'>
                    <span className='parametr-label'>Feels like </span>
                    <span className='parametr-values'>{Math.round(data.main.feels_like)}°</span>
                </div>
                <div className='parametr-row'>
                    <span className='parametr-label'>wind</span>
                    <span className='parametr-values'>{data.wind.speed}</span>
                </div>
                <div className='parametr-row'>
                    <span className='parametr-label'>humidity</span>
                    <span className='parametr-values'>{data.main.humifity}%</span>
                </div>
                <div className='parametr-row'>
                    <span className='parametr-label'>Pressure</span>
                    <span className='parametr-values'>{data.main.pressure}hPa</span>
                </div>
            </div>
        </div>
        <img alt='weather' className='weather-icon' src={`icons/${data.weather[0].icon}.png`}  />
    </div>
  )
}
