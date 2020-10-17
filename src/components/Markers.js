import React from 'react'

import { Marker, Popup} from 'react-leaflet'
import {IconComponent} from './IconComponent'

const Markers = (props) => {
  const {markers} = props;

  const places = markers.map((marker, i) => (
    <Marker 
      key={i}
      position={marker.coords} 
      icon={IconComponent}>
      <Popup>{marker.name}</Popup>
      
    </Marker>
  ))

  return places 

    
}

export default Markers
