import React, { useState, useEffect } from 'react';
import queryString from 'query-string'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styled, { keyframes } from 'styled-components';
import { fadeIn, bounceIn } from 'react-animations'

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 4s ${fadeInAnimation};
`;

const bounceInAnimation = keyframes`${bounceIn}`;
const BounceInDiv = styled.div`
  animation: 3s ${bounceInAnimation};
`;

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
  gamePinContainer: {
    position: 'relative',
    top: '10px',
    marginRight: '1%',
  },
  textGamePin: {
    width: '160px',
    height: '40px',
    backgroundColor: 'white',
    textAlign: 'center',
    lineHeight: '40px',
    margin: '0px auto',
    borderRadius: '10px 10px 0px 0px',
    fontWeight: 1000,
    fontSize: '25px',
  },
  gamePin: {
    width: '250px',
    height: '80px',
    backgroundColor: 'white',
    borderRadius: '10px',
    textAlign: 'center',
    lineHeight: '80px',
    fontWeight: 1000,
    fontSize: '60px',
    color: '#693fd3',
    letterSpacing: '3px',
  },
  playersContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '900px',
    minHeight: '200px',
    // backgroundColor: 'white',
    marginTop: '40px',
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: '20px',
  },
  startButton: {
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

const Lobby = (props) => {
    const classes = useStyles();
    const [game, setGame] = useState({id: "", route: "", createdAt: "", gameTimeHours: "",  gameTimeMinutes: "", groupsAmount: "", gamePin: "", state: ""});

    useEffect(() => { 
        getSpecificGame();
    }, []);

    const getSpecificGame = async () => {
        const value = queryString.parse(props.location.search);
        const gameId = value.id;
        if (gameId) {
            let data =[];
            try {
            data = await fetch(`https://qr-go.herokuapp.com/api/games/${gameId}`).then(res => res.json());
            } catch(err) {
            console.log("error where fetching data");
            }
            setGame({id: data.game._id, route: data.game.route, createdAt: data.game.createdAt, gameTimeHours: data.game.gameTime.hours, gameTimeMinutes: data.game.gameTime.minutes, groupsAmount: data.game.groupsAmount, gamePin: data.game.gamePin, state: data.game.state});            
        }
    }

    const eachAvatar = (item, index) => {
        return  (<Avatar key={item.id} index={index} alt="" src="" className={classes.large} />)
    };
  
    return (

      <div className={classes.wrapper}>
            <BounceInDiv>
                <div className={classes.gamePinContainer}>
                    <Typography  className={classes.textGamePin}>Game PIN:</Typography>
                    <Typography className={classes.gamePin}>{game.gamePin}</Typography>
                </div>
            </BounceInDiv>
            <div className={classes.playersContainer}>
            <FadeInDiv> <Avatar className={classes.avatar} alt="" src={props.user.image} /></FadeInDiv>            
                {/* { routes.map(eachAvatar) } */}
            </div>
            <Button className={classes.startButton} variant="contained">Start Game!</Button>

      </div>    
    );
  }
  export default Lobby;