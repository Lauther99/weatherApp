import React from 'react';

const TitleComp = ({city, country, weatherDescription}) => {
    return (
        <div className='title'>
            <h2>Right now in: </h2>
            <span>{city}, {country}</span>
            <h3> it's {weatherDescription}</h3>
        </div>
    );
};

export default TitleComp;