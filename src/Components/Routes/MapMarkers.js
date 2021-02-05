
import React, {useState} from 'react';
import ChallengeDialog from './ChallengeDialog'
import { MapContainer, TileLayer, Marker, useMapEvents, Popup, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L, { icon } from 'leaflet'
import QrGoMarker from '../../Images/marker.png' 
import QrGoMarkerShadow from '../../Images/shadow.png'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( () => ({
    dialog: {
      width: '100%',
      height: '100%',
    }
  
    }));
  

  const MapMarkers = (props) => {
    const classes = useStyles();
    const [position, setPosition] = useState(null);

    const [open, setOpen] = useState(false);

    const [currentMarker, setCurrentMarker] = useState();


    const extendIcon = L.Icon.extend({
      options: {
      iconSize:     [30, 38], // size of the icon
      shadowSize:   [42, 36], // size of the shadow
      iconAnchor:   [9, 16], // point of the icon which will correspond to marker's location
      }
    });

    const myIcon = new extendIcon({
      iconUrl: QrGoMarker,
      shadowUrl: QrGoMarkerShadow,
  })


    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setPosition(e.latlng)
        const challengeMarker = new L.marker([lat, lng], {icon: myIcon})
        challengeMarker.addTo(map);

        challengeMarker.on({
            click: (e) => {
              setOpen(true);
            },
        });

        const newMarker = {marker: challengeMarker,secretkey:"qrqrq", clue:"hi", url:"dfdfd" }
        props.addMarker(newMarker);
        setCurrentMarker(newMarker);
      },
      
    });
    // return null;
    return (
      
      <ChallengeDialog className={classes.dialog} currentMarker={currentMarker} dialogMode={open} onClose={() => setOpen(false)} />
      
    );
    // return position === null ? null : (
    //   <Marker position={position} icon={myIcon} markerIndex={markerIndex}>
    //     <Tooltip>hiiiiiiiiiiiiiiiiiiii</Tooltip>
    //   </Marker>
    // );
    
  };
  export default MapMarkers;