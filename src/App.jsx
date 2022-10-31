import './App.css'
import TitleComp from './components/TitleComp'
import BodyComp from './components/BodyComp'
import useApi from './hooks/useApi'
import usePosition from './hooks/usePosition'
import LoadingScreen from './components/LoadingScreen'



function App() {
  const { lat, lon } = usePosition()
  const { data } = useApi({ lat: lat, lon: lon })

  const city = data.name
  const country = data.sys?.country
  const weatherDescription = data.weather?.[0].description
  const temp = data.main?.temp
  const maxTemp = data.main?.temp_max
  const minTemp = data.main?.temp_min
  const wind = data.wind?.speed
  const humidity = data.main?.humidity
  const iconId = data.weather?.[0].icon

  return (
    <>
      <LoadingScreen />
      <div className='weather-container'>
        <TitleComp city={city} country={country} weatherDescription={weatherDescription} />
        <BodyComp temp={temp} wind={wind} humidity={humidity}
          iconId={iconId} maxTemp={maxTemp} minTemp={minTemp} />
      </div>
    </>
  )
}

export default App
