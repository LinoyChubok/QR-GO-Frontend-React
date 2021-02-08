import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ribbon from '../../Images/ribbon.svg'
import MobileStepper from '@material-ui/core/MobileStepper';


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
  container: {
    marginTop: '20px',
    width: '85vw',
    minHeight: '400px'
  },
  time: {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#303030',
  },
  ribbon: {
    position: 'relative',
    backgroundImage:`url(${ribbon})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '280px',
    height: '120px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px',
  },
  groupName: {
    position: 'absolute',
    textAlign: 'center',
    marginTop: '15px',
    color: 'white',
    left: '90px',
    top: '12px',
    fontSize: '25px',
    fontWeight: 'bold',
  },
  clue: {
    textAlign: 'center',
    fontSize: '25px',
    fontWeight: 'bold',
    color: '#303030',
    width: '80%',
    minHeight: '150px',
    margin: '0px auto',
    marginTop: '-20px',
    wordWrap: 'break-word', 
  },
  stepperContainer: {
    marginTop: '20px',
    marginBottom: '10px'

  },
  stepper: {
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '300px',
    backgroundColor: 'white',
  },
  linearProgress: {
    width: '100%',
  },
  challengesCounter: {
    textAlign: 'center',
    marginTop: '5px',
    color: '#3f51b5',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  
}));

const PlayGame = (props) => {
    const [activeStep, setActiveStep] = useState(3);


    const classes = useStyles();

      return (
        <div className={classes.wrapper}>
            <Paper elevation={3} className={classes.container}>
                <Typography className={classes.time}>Remaining Time: 01:24:05</Typography>
                <div className={classes.ribbon}>
                    <Typography className={classes.groupName}>Group A</Typography>
                </div>
                <Typography className={classes.clue}>clue</Typography>

                <div className={classes.stepperContainer}>
                    <MobileStepper className={classes.stepper} steps={6} variant="progress" activeStep={activeStep} position="static" backButton={null} nextButton={null}
                    LinearProgressProps={{ className: classes.linearProgress }}/>
                    <Typography className={classes.challengesCounter}>1 / 4</Typography>
                </div>
            </Paper>
        </div>    
      );
  


  }
  export default PlayGame;