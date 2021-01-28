import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import queryString from 'query-string'


import { makeStyles } from '@material-ui/core/styles';
import RouteForm from './RouteForm'
import { Paper } from '@material-ui/core';

const useStyles = makeStyles( () => ({
    flexContainer: {
      position: 'relative',
      display: 'flex',
      flexWrap: 'wrap',
	    flexDirection: 'row',
      width: '96%',
      minHeight: '470px',
      backgroundColor: 'white',
      margin: '0px auto',
      top: '15%',
    },
    challengesContainer: {
      position: 'relative',
      marginTop: '1.5%',
      width: '45%',
      height: '428px',
  },
  map: {
    width: '100%',
    height: '100%',
  }

  }));

const BuildRoute = (props) => {
  const classes = useStyles();

  const value = queryString.parse(props.location.search);
  const currentRoute = value.id;

  
  const position = [51.505, -0.09]

  return( 
      <Paper elevation={3} className={classes.flexContainer}>
        <RouteForm routeId={currentRoute}/>    

        <div className={classes.challengesContainer}>
          <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className={classes.map}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </Paper>        
  );   
}
export default BuildRoute;