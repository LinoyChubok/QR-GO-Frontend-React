import React, { useState, useEffect } from 'react';
import queryString from 'query-string'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles( (theme) => ({
    wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    height: '100%',
    margin: '0px auto',
  },
  startText: {
    position: 'relative',
    top: '50px',
    marginRight: '1%',
  },
  playerName: {
    width: '160px',
    height: '40px',
    lineHeight: '40px',
    fontWeight: 1000,
    fontSize: '25px',
    textAlign: 'center',
    margin: '0px auto',
    color: '#693fd3',
  },
  sentence: {
    width: '340px',
    height: '40px',
    lineHeight: '40px',
    fontWeight: 500,
    fontSize: '22px',
    textAlign: 'center',
    color: '#707070',
  },
  playersContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '900px',
    minHeight: '200px',
    marginTop: '40px',
  },
  gamePinInput: {
    marginTop: 130,
    marginBottom: 20,
    width: 300,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    border: "2px solid #693fd3",     
    textAlign: "center",
  },
  joinButton: {
    color: '#ffffff',
    borderRadius: '8px',
    marginTop: '15px',
    border: `1px solid #693fd3`,
    background: '#693fd3',
    fontSize: '20px',
    textTransform: 'none',
    fontWeight: 1000,
  },
  }));

const Join = () => {
    const classes = useStyles();
 
  
    return (
      <div className={classes.wrapper}>
        <div className={classes.startText}>
            <Typography  className={classes.playerName}>Hello Linoy,</Typography>
            <Typography className={classes.sentence}>The game is about to start. Please enter the game PIN below.</Typography>
        </div>
        <InputBase classes={{ input: classes.gamePinInput }} placeholder="Game PIN" label="Outlined" variant="outlined"/>
        <Button className={classes.joinButton} variant="contained">Join!</Button>
      </div>    
    );
  }
  export default Join;