import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [weather, setWeather] = useState({})

  useEffect(() => {
    const success = pos => {
      const lat = pos.coords.latitude
      const lon = pos.coords.longitude
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b4133845e46c70676236d4ca05f572ab`)
        .then(res => setWeather(res.data))
    }

    navigator.geolocation.getCurrentPosition(success)

  }, [])

  console.log(weather)

  return (
    <>
      <div className='weather-container'>
          <div className='title'>
            <h2>Right now in ,</h2>
            <span>¡Hola mundo!</span>
            <h3> it's (estado)</h3>
          </div>
        <div className='weather-card'>
          <img src="https://www.freepnglogos.com/uploads/sun-png/sun-day-rays-sun-image-pixabay-35.png" alt="" className='weather-img' />
          <h2>60°C</h2>
          <div className='others-container'>
            <div className="item">
              <p>wind icon</p>
              <p> <b>9 </b>mph</p>
            </div>
            <div className="item">
              <p>wind icon</p>
              <p> <b>9 </b>mph</p>
            </div>
            <div className="item">
              <p>wind icon</p>
              <p> <b>9 </b>mph</p>
            </div>
          </div>

        </div>

      </div>


    </>
  )
}

export default App
