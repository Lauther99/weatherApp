import React from 'react';

const ButtonTemp = ({isCelsius, setisCelsius}) => {
    function changeTemp(){
        isCelsius? setisCelsius(false) : setisCelsius(true)
    }

    return (
        <div>
            <button onClick={()=>{changeTemp()}}>Change to °F</button>
        </div>
    );
};

export default ButtonTemp;