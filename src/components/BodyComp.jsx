import React, { useState } from 'react';
import ButtonTemp from './ButtonTemp'

const BodyComp = ({ temp, wind, humidity, iconId, maxTemp, minTemp }) => {
    const iconUrl = `http://openweathermap.org/img/wn/${iconId}@2x.png`
    const [isCelsius, setisCelsius] = useState(false)

    const kindOfTemp = setKindOfTem()
    function setKindOfTem() {
        if (isCelsius) {
            temp = (temp - 273).toFixed(2)
            maxTemp = (maxTemp - 273).toFixed(2)
            minTemp = (minTemp - 273).toFixed(2)
            return '°C'
        } return '°F'
    }

    return (
        <div className='weather-card'>
            <img src={iconUrl} alt="" className='weather-img' />
            <h2>{temp} {kindOfTemp}</h2>
            <div className='others-container'>
                <div className="item">
                    <i className='bx bx-wind bx-sm'></i>
                    <p><b>{wind} </b>mph</p>
                </div>
                <div className="item">
                    <i className="fa-solid fa-droplet fa-xl"></i>
                    <p><b>{humidity}</b>%</p>
                </div>
                <div className="item">
                    <i className="fa-solid fa-temperature-low fa-xl"></i>
                    <p><b>{maxTemp}</b> {kindOfTemp}</p>
                </div>
                <div className="item">
                    <i className="fa-solid fa-temperature-high fa-xl"></i>
                    <p><b>{minTemp}</b> {kindOfTemp}</p>
                </div>

                <ButtonTemp isCelsius={isCelsius} setisCelsius={setisCelsius} />
            </div>

        </div>

    );
};


export default BodyComp;