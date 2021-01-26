import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( (theme) => ({
    para: {
        paddingTop: "100px",
    },
  }));

const Home = () => {
    const classes = useStyles();
    
    return(
        <div className={classes.homeComponent}>
            <p className={classes.paragraph}>Cras facilisis urna ornare ex volutpat, et        
            </p>
        </div>

    );
}
export default Home;