import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import RouteForm from './RouteForm'
import Map from './Map'
import { Paper } from '@material-ui/core';

const useStyles = makeStyles( () => ({
    flexContainer: {
        position: 'relative',
        width: '96%',
        backgroundColor: 'white',
        margin: '0px auto',
        top: '20%',
    }

  }));

const BuildRoute = (props) => {
  const classes = useStyles();

 
  
    return( 
        <Paper elevation={3} className={classes.flexContainer}>
            <RouteForm/>    
            <Map/>    
        </Paper>
            
    );   
  }
  export default BuildRoute;