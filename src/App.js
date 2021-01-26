import './App.css';
import Header from './Components/Header';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( (theme) => ({
}));

const App = ( {children, isAuthed} ) => {

  const classes = useStyles();
  const location = useLocation();

  const [bgColor, SetBgColor] = useState('#f2edf3');
  const [isAuth, SetIsAuth] = useState();


  useEffect(() => {
    const currentPath = location.pathname;

    if( currentPath === "/"){
      SetBgColor('linear-gradient( #693fd3, #693fd3,#4822a7, #4822a7)');
      SetIsAuth(false);
    }
    else if(currentPath === "/routes"){
      SetBgColor('#f2edf3');
      SetIsAuth(true);
    }    
    console.log(currentPath);


  }, [location.pathname]);


  return (
    <div style={{ background: bgColor}} id="main">
      <Header changeHeader={isAuth}/>
      {children}
    </div>
  );
}

export default App;
