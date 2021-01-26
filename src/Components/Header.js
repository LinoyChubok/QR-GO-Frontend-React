import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
import logo from '../Images/logo.png'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
const useStyles = makeStyles( (theme) => ({
    logo: {
        backgroundImage: `url(${logo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '50px',
        height: '50px',
        marginLeft: '10px',
    },
    customAppBar: {
        backgroundColor: '#ffffff',
    },
    ToolbarItem: {
        borderRadius: '8px',
	    marginLeft: '50px',
	    color: '#693fd3',
        fontWeight: 'bold',
        textDecoration: 'none',
    }
  }));
const Header = () => {
    const classes = useStyles();
    const [loggedIn, setLoggedIn] = useState(true);

    const renderHeader= () => {
        return (
            <AppBar className={classes.customAppBar} >
                <NavLink exact to="/routes">Routes</NavLink>
                <NavLink exact to="/games">Games</NavLink>
                <NavLink exact to="/statistics">Statistics</NavLink>
            </AppBar>
        ); 
    }    
    const renderHomePageHeader= () => {
        return (
            <AppBar className={classes.customAppBar}>
                <Toolbar>
                    <div className={classes.logo}></div>
                    <NavLink className={classes.ToolbarItem} exact to="/">Get Started</NavLink>
                    <NavLink className={classes.ToolbarItem} exact to="/routes">How It Works</NavLink>
                    <NavLink className={classes.ToolbarItem} exact to="/">About Us</NavLink>
                    <NavLink className={classes.ToolbarItem} exact to="/">Contact</NavLink>
                </Toolbar>
            </AppBar>
        ); 
    }
    return loggedIn ? renderHomePageHeader() : renderHeader();
}
export default Header;