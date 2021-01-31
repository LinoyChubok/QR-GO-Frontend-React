import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles( () => ({
  container: {
    position: 'relative',
    width: '90%',
    minHeight: '850px',
    margin: '0px auto',
    top: '15%',
    marginBottom: 50,
    background: 'pink'
  },

  
  }));

const NotFound = () => {
    const classes = useStyles();
    
    return (
      <div className={classes.container}>
       
      </div>     
    );
  }
  export default NotFound;