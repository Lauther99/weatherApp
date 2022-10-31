import React, { useState } from 'react';

const LoadingScreen = () => {
    const [loadingStyle, setloadingStyle] = useState({})

    const myTimeout = setTimeout(() =>{
        setloadingStyle({display: `none`,
        opacity: `0`})
    }, 3000);

    return (
        <div className='loading-container' style={loadingStyle}>
            <div className='loading-circle'></div>
        </div>
    );
};

export default LoadingScreen;