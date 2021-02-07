import React, {useState} from 'react';
import 'leaflet/dist/leaflet.css';
import queryString from 'query-string'

import { makeStyles } from '@material-ui/core/styles';
import RouteForm from './RouteForm'
import { Paper } from '@material-ui/core';
import RouteMap from './RouteMap'

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
  }));

const BuildRoute = (props) => {
  const classes = useStyles();

  const value = queryString.parse(props.location.search);
  const currentRoute = value.id;

  const [routeMode, setRouteMode] = useState(false);

  
  return( 
      <Paper elevation={3} className={classes.flexContainer}>
        <RouteForm routeId={currentRoute} routeMode={(mode) => setRouteMode(mode)}/>    
        <RouteMap routeMode={routeMode} />
    </Paper>        
  );   
}
export default BuildRoute;