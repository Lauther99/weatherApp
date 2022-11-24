import React, { useState } from 'react';

const TitleComp = ({ city, country, weatherDescription }) => {
    let letters = (city + country).length
    if (isNaN(letters)) letters = 10

    const [styles, setStyles] = useState({ width: `${letters + 2}ch` })

    const myTimeout = setTimeout(() => {
        setStyles({
            width: `${letters + 2}ch`,
            animation: `typing 2s steps(${letters}),
            blink .5s infinite step-end alternate`,
            textShadow: `var(--format-shadow)`
        })
    }, 500);

    return (
        <div className='title'>
            <h2>Right now in: </h2>
            <div style={styles}>{city}, {country}</div>
            <h3> it's {weatherDescription}</h3>
        </div>
    );
};

export default TitleComp;