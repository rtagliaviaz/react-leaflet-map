import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import oporto from '../assets/oporto.jpg'


const Home = () => {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0
  })




  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position){
        setCoords({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        })
      },
      function(error) {
        console.log(error)
      },
      {enableHighAccuracy: true}
    )
  })

  return (
    <div>
      {/* <img src={oporto} className="back"alt=""/> */}
      {/* <h1>GeoLocation API</h1>
      <p>longitude: {coords.longitude}</p>
      <p>latitude: {coords.latitude}</p>

      <Link to={{pathname: '/map', state: coords }}>My Current Location</Link> */}
    </div>
  )
}

export default Home
