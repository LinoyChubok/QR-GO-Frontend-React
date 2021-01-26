import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import sideImage from '../../Images/ipad-iphone-qrgo.png'
import waveFooter from '../../Images/wave.svg'
const useStyles = makeStyles( (theme) => ({
    mainContainer: {
        marginTop: '15%',
        float: 'left',
    },
    textContainer: {
        marginBottom: '2%',
        color: 'white',
	    fontSize: '18px',
    },
    paragraph: {
        whiteSpace: 'pre-line',
        paddingTop: '10px',
        marginBottom: '60px',
    },
  }));

const Home = () => {
    const classes = useStyles();

    const googleButtonClick = () => {
        window.location.assign('https://qr-go.herokuapp.com/auth/google');
    }


    return(
        <div className={classes.homeComponent}>
            <div id="wrapper">
                <div className={classes.mainContainer}>
                    <section className={classes.textContainer}>
                        <h1>The Ultimate QR Game</h1>
                        <p className={classes.paragraph}>Create the best adventure for your group with our QR GO web app{"\n"}
                            designed for a powerful experience and team building.
                        </p>
                    </section>
                    {/* Google Sign in */}
                    <div className="g-sign-in-button" onClick={googleButtonClick}>
                        <div className="sign-in-wrapper">
                            <div className="googleLogo">
                                <img src='https://developers.google.com/identity/images/g-logo.png' alt="google sign in"/>
                            </div>
                            <span className="googleBtnText">
                                Sign in with Google
                            </span>
                        </div>
                    </div>
                    {/* End Google Sign in */}     
                </div>
                <div id="sideImage" className={classes.sideImage} >
                    <img src={sideImage} alt="devices" />
                </div>    
            </div>

            <footer id="footerHomePage"><div id="footerQR"></div></footer>
        </div>

    );
}
export default Home;