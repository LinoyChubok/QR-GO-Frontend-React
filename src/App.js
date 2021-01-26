import './App.css';
import Header from './Components/Header';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( (theme) => ({
}));

const App = ( {children} ) => {

  const classes = useStyles();
  const location = useLocation();

  const [bgColor, SetBgColor] = useState('#f2edf3');

  useEffect(() => {
    const currentPath = location.pathname;

    if( currentPath === "/"){
      SetBgColor('linear-gradient( #693fd3, #693fd3,#4822a7, #4822a7)');
    }
    else {
      SetBgColor('#f2edf3');
    }
  }, [location.pathname]);

  return (
    <div style={{ background: bgColor}} id="main">
      <Header/>
      {children}
    </div>
  );
}

export default App;
