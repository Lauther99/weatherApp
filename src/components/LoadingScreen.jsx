import React, { useState } from 'react';

const LoadingScreen = ({load}) => {
    let loadingStyle = {}


    if (!load) {
        loadingStyle = {display: `none`,
        opacity: `0`}
    }

    
    return (
        <div className='loading-container' style={loadingStyle}>
            <div className='loading-circle'></div>
        </div>
    );
};

export default LoadingScreen;