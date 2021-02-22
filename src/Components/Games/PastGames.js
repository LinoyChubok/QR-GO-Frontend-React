import React, { useState, useEffect } from 'react';
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

import Game from './Game'

const useStyles = makeStyles( () => ({
  table: {
    height: 350,
    overflow: 'auto',
  },
  tableTitle: {
    paddingTop: 15 ,
    paddingLeft: 15 ,
    color: '#693fd3',
    fontSize: '24px',
  }
  
  }));

const PastGames = (props) => {
  const classes = useStyles();
  const [pastGames, setPastGames] = useState([]);

  useEffect(() => { 
    fetchData();
  }, []);

  const fetchData = async () => {
    let data =[];
    try {
      data = await fetch("https://qr-go.herokuapp.com/api/games?state=Endgame").then(res => res.json());
    } catch(err) {
      console.log("error where fetching data");
    }
    data.games.map(game => add({id: game._id, route: game.route, createdAt: moment(game.createdAt).format('YYYY/MM/DD'), gameTime: game.gameTime, groupsAmount: game.groupsAmount, gamePin: game.gamePin, state: game.state}))
  }

  const nextId = (activeGames = []) => {    
    let max = activeGames.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id , 0);
    return ++max;
  };

  const add = (newGame) => {
    setPastGames(prevState => ([
        ...prevState, {
            id: newGame.id !== null ? newGame.id : nextId(prevState),
            route: newGame.route,
            createdAt: newGame.createdAt,
            gameTime: newGame.gameTime,
            groupsAmount: newGame.groupsAmount,
            gamePin: newGame.gamePin,
            state: newGame.state,
      }])
    )
  };

  const deleteGame = async (id) => {
    let result;
    try {
      result = await fetch(`https://qr-go.herokuapp.com/api/games/${id}`, {method: 'DELETE'}).then(res => res.json());
    } catch(err) {
      console.log("error where fetching data");
    }
    console.log(result);

    setPastGames(prevState => (
      prevState.filter((game, i) => game.id !== id)
    ))
  }


  const eachGame = (item, index) => {
  return  (<Game key={item.id} index={index} game={item}></Game>)
  };

  
  return(  
    <TableContainer className={classes.table} component={Paper}>
        <Typography className={classes.tableTitle} gutterBottom>Past Games</Typography>
        <Table aria-label="customized table">
            <TableHead>
                <TableRow>
                    <TableCell style={{fontWeight: "bold"}} align="left">Created</TableCell>
                    <TableCell style={{fontWeight: "bold"}} align="left">Route</TableCell>
                    <TableCell style={{fontWeight: "bold"}} align="left">Players Per Group</TableCell>
                    <TableCell style={{fontWeight: "bold"}} align="left">Game Time</TableCell>
                    <TableCell style={{fontWeight: "bold"}} align="left">Game Status</TableCell>
                    <TableCell align="left"></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                { pastGames.map(eachGame) }
            </TableBody>
        </Table>
    </TableContainer>  
  );   
  }
  export default PastGames;