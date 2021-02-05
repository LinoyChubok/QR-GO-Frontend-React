
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


    const myIcon = new L.icon({
      iconUrl: QrGoMarker,
      shadowUrl: QrGoMarkerShadow,
      iconSize:     [30, 38], // size of the icon
      shadowSize:   [32, 38], // size of the shadow
      iconAnchor:   [9, 16], // point of the icon which will correspond to marker's location
  });


    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setPosition(e.latlng)
        const challengeMarker = L.marker([lat, lng], myIcon)
        challengeMarker.addTo(map);

        challengeMarker.on({
            click: (e) => {
              setOpen(true);
            },
        });

        const newMarker = {marker: challengeMarker,secretkey:"qrqrq", clue:"hi", url:"dfdfd" }
        props.addMarker(newMarker);
      },
      
    });
    // return null;
    return (
      
      <ChallengeDialog className={classes.dialog} dialogMode={open} />
      
    );
    // return position === null ? null : (
    //   <Marker position={position} icon={myIcon} markerIndex={markerIndex}>
    //     <Tooltip>hiiiiiiiiiiiiiiiiiiii</Tooltip>
    //   </Marker>
    // );
    
  };
  export default MapMarkers;