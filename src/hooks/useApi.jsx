import { useState, useEffect } from 'react'
import axios from 'axios'

const useApi = ({lat, lon}) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b4133845e46c70676236d4ca05f572ab`
    const [data, setData] = useState({})
    
    useEffect(() => {
        if (lat && lon) {
            axios.get(url)
                .then(res => setData(res.data))
        }
    }, [lat])
    return {data}
}

export default useApi;