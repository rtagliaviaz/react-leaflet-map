import React, {useState, useEffect} from 'react'
import {Map, TileLayer} from 'react-leaflet'
import "leaflet/dist/leaflet.css";

// import {useHistory, useLocation} from 'react-router-dom'

import Markers from './Markers'

import {markers} from '../assets/data.json'

const MapView = () => {
  const [location, setLocation] = useState({
    current: {lat: '41.1357285', lng: '-8.6393059'},
    zoom: 13
  })

  // const loc = useLocation()
  // const history = useHistory()

  // useEffect(() => {
  //   if(loc.state.latitude && loc.state.longitude) {
  //     const current = {
  //       lng: loc.state.longitude,
  //       lat: loc.state.latitude
  //     }
  //     setLocation({...location, current})

  //     history.replace({pathname: '/map', state: {}})
  //   }
    
  // }, [])
  return (
    <Map center={location.current} zoom={location.zoom}>
      <TileLayer 
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
      <Markers markers={markers}/>
    </Map>
  )
}

export default MapView
