import React from 'react';

const BodyComp = ({temp, wind, humidity,iconId, maxTemp, minTemp}) => {
    const iconUrl = `http://openweathermap.org/img/wn/${iconId}@2x.png`
    return (
        <div className='weather-card'>
            <img src={iconUrl} alt="" className='weather-img' />
            <h2>{temp}</h2>
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
                    <p><b>{maxTemp}</b>mph</p>
                </div>
                <div className="item">
                <i className="fa-solid fa-temperature-high fa-xl"></i>
                    <p><b>{minTemp}</b>mph</p>
                </div>
            </div>
        </div>
    );
};

export default BodyComp;