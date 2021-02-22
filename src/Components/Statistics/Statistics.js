import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import medal from '../../Images/gold-medal.png'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import randomColor from "randomcolor";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '95%',
        height: '100%',
        margin: '0px auto',
      },
      container: {
        width: '85vw',
        minHeight: '400px'
      },
    medal: {
        position: 'relative',
        backgroundImage:`url(${medal})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        width: '150px',
        height: '150px ',
        margin: 'auto',
        marginTop: '40px',
      },
      gameWinner: {
        whiteSpace: 'pre-line',
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: 'bold',
        backgroundColor: '#693fd3',
        color: 'white',
        width: '300px',
        height: '80px',
        margin: 'auto',
        padding: '10px',
        borderRadius: '10px'
      },
      chartContainer: {
        marginTop: '20px',
        backgroundColor:'white',
        width: '100%',
        minHeight: '350px',
        overflowX: 'auto',
      },
      lineChart: {
        margin: '20px auto',
        width: '100%'
      }
}));

const Statistics = () => {
    const classes = useStyles();
    const gameData = [
    {
        name: "Challenge 1",
        Group_1: 10,
        Group_2: 12,
        Group_3: 15
    },
    {
        name: "Challenge 2",
        Group_1: 22,
        Group_2: 13,
        Group_3: 17
    },
    {
        name: "Challenge 3",
        Group_1: 18,
        Group_2: 7,
        Group_3: 12
    },
    {
        name: "Challenge 4",
        Group_1: 9,
        Group_2: 12,
        Group_3: 11
    },
    {
        name: "Challenge 5",
        Group_1: 30,
        Group_2: 14,
        Group_3: 21
    },
    {
        name: "Challenge 6",
        Group_1: 20,
        Group_2: 14,
        Group_3: 23
    },
    {
        name: "Challenge 7",
        Group_1: 12,
        Group_2: 5,
        Group_3: 12
    },
    {
        name: "Challenge 8",
        Group_1: 5,
        Group_2: 5,
        Group_3: 10
    },
    {
        name: "Challenge 9",
        Group_1: 16,
        Group_2: 14,
        Group_3: 12,
    },
    {
        name: "Challenge 10",
        Group_1: 12,
        Group_2: 5,
        Group_3: 16,
    },
    ];

    let groups = [{ "groupName":"Group_1"}, { "groupName":"Group_2"},{ "groupName":"Group_3"},];


    useEffect(() => {
    
    },[]);

    const eachGroup = (item, index) => {
        let color = randomColor();
        return  (<Line type="monotone" dataKey={item.groupName} stroke={color} />)
      };

      return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.medal}></div>
                <Typography className={classes.gameWinner}>Game Winner {"\n"} Group_1</Typography>
                <div className={classes.chartContainer}>
                    <LineChart width={1000} height={300} data={gameData} margin={{ top: 5, right: 60, left: 0, bottom: 5 }} className={classes.lineChart}  >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {groups.map(eachGroup)};
                    </LineChart>
                </div>
            </div>
        </div>
      );
  
  }
  export default Statistics;