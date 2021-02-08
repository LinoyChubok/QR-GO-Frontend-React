import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ribbon from '../../Images/ribbon.svg'
import MobileStepper from '@material-ui/core/MobileStepper';
import StepLabel from '@material-ui/core/StepLabel';


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
    height: '400px'
  },
  ribbon: {
    position: 'relative',
    backgroundImage:`url(${ribbon})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '280px',
    height: '130px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px',
  },
  groupName: {
    position: 'absolute',
    textAlign: 'center',
    marginTop: '20px',
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
    width: '80%',
    /////
    height: '40%',
    margin: '0px auto',
    // backgroundColor:'pink',
  },
  stepperContainer: {
    marginTop: '30px'
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
  challenge: {
    textAlign: 'center',
    marginTop: '5px',
    color: 'gray',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  
}));

const PlayGame = (props) => {
    const [activeStep, setActiveStep] = useState(3);


    const classes = useStyles();

      return (
        <div className={classes.wrapper}>
            <Paper elevation={3} className={classes.container}>
                <div className={classes.ribbon}>
                    <Typography className={classes.groupName}>Group A</Typography>
                </div>
                <Typography className={classes.clue}>The wind is blow</Typography>

                <div className={classes.stepperContainer}>
                    <MobileStepper className={classes.stepper} steps={6} variant="progress" activeStep={activeStep} position="static" backButton={null} nextButton={null}
                    LinearProgressProps={{ className: classes.linearProgress }}/>
                    <Typography className={classes.challenge}>1 / 4</Typography>
                </div>
            </Paper>
        </div>    
      );
  


  }
  export default PlayGame;