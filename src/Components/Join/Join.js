import React, { useState, useEffect } from 'react';
import io from "socket.io-client";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';

// const ENDPOINT = 'https://qr-go.herokuapp.com';
const ENDPOINT = 'http://localhost:3000';

//const site_url = "https://qr-go.netlify.app";
const site_url = "http://localhost:3001";

let socket;

const useStyles = makeStyles((theme) => ({
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
  waitSentence: {
    width: '400px',
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
    marginTop: 75,
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

const Join = (props) => {
    const [gamePin, setGamePin] = useState('');
    const [gameArea, setGameArea] = useState('');
    const [joinClicked, setJoinClicked] = useState(0);

    const user = { googleId: props.user.googleId, name: props.user.displayName, image: props.user.image};

    useEffect(() => {
      socket = io(ENDPOINT);
      
      return () => {
        socket.emit('disconnect');
        socket.off();
      }
    }, []);

    useEffect(() => {
      socket.on("gameArea", ({ area }) => {
        setGameArea(area);
      });

      socket.on("joinAgain", () => {
        window.location.assign(`${site_url}/join`);
      });

    }, []);

    const handleJoinGame = (e) => {
      e.preventDefault();
      socket.emit('playerJoinLobby', { playerData: user, gamePin }, (error) => {
        if (error) {
          alert(error);
        }
        else {
          setJoinClicked(1);
        }
      });
    }

    const classes = useStyles();

    const renderBeforeJoin= () => {
      return (
        <div className={classes.wrapper}>
          <div className={classes.startText}>
              <Typography  className={classes.playerName}>{`Hello ${props.user.firstName},`}</Typography>
              <Typography className={classes.sentence}>Ready for a new adventure?</Typography>
          </div>
          <InputBase classes={{ input: classes.gamePinInput }} onChange={(e => setGamePin(e.target.value))} value={gamePin} placeholder="Game PIN" label="Outlined" variant="outlined"/>
          <Button className={classes.joinButton} onClick={handleJoinGame} variant="contained">Join!</Button>
        </div>    
      );
  } 
  
  const renderAfterJoin= () => {
    return (
      <div className={classes.wrapper}>
        <div className={classes.startText}>
            <Typography className={classes.waitSentence}>Waiting for Admin to start the game at {gameArea}...</Typography>
            <div className="loader"></div>
        </div>
      </div>    
    );
  }

  return joinClicked ? renderAfterJoin() : renderBeforeJoin() ;
  }
  export default Join;