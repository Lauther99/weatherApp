import { useState, useEffect } from 'react'

const usePosition = () => {
    const [lat, setLat] = useState(null)
    const [lon, setLon] = useState(null)


    useEffect(() => {
        const success = (pos) => {
            setLat(pos.coords.latitude)
            setLon(pos.coords.longitude)
            return [lat, lon]
        }
        navigator.geolocation.getCurrentPosition(success)
    }, [])

    return {lat, lon}
}

export default usePosition;