
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

    const [open, setOpen] = useState(false);
    const [currentMarker, setCurrentMarker] = useState();
    const [markerIndex, setMarkerIndex] = useState(1);

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

  const addNewMarker = (e, qr) => {
    const newMarker = new L.marker([e.latlng.lat, e.latlng.lng], {
      index: markerIndex,
      icon: myIcon,
      secretkey: qr.secretkey,
      url: qr.url,
      clue: "",
    }).addTo(map);

    props.addMarker(newMarker);

    newMarker.on({
      click: () => {
        setCurrentMarker(newMarker);
        setOpen(true);
      },
    });

    setMarkerIndex(markerIndex + 1);
  }

  const generateQR = async (e) => {
    let data =[];
    try {
      data = await fetch("https://qr-go.herokuapp.com/api/qr", {method: 'POST'}).then(res => res.json());
    } catch(err) {
      console.log("error where fetching data");
    }
    if(data) {
      addNewMarker(e, data);
    }
  }

  const addMarkerEditMode = (e, qr) => {
    const newMarker = new L.marker([e.latlng.lat, e.latlng.lng], {
      index: markerIndex,
      icon: myIcon,
      secretkey: qr.secretkey,
      url: qr.url,
      clue: "",
    }).addTo(map);

    props.addMarker(newMarker);

    newMarker.on({
      click: () => {
        setCurrentMarker(newMarker);
        setOpen(true);
      },
    });

    setMarkerIndex(markerIndex + 1);
  }

    const map = useMapEvents({
      click: (e) => {
        if( props.routeMode === "Create") {
          generateQR(e);
        }
        else if( props.routeMode === "Edit" ) {
          addMarkerEditMode()
        }
      },     
    });

    return ( 
      <ChallengeDialog className={classes.dialog} markers={props.markers} currentMarker={currentMarker} routeMode={props.routeMode} dialogMode={open} onClose={() => setOpen(false)} /> 
    );
  };
  export default MapMarkers;