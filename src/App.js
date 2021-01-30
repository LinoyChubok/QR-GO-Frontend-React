import './App.css';
import Header from './Components/Header';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const App = ( {children} ) => {

  const location = useLocation();

  const [bgColor, SetBgColor] = useState();
  const [headerMode, SetHeaderMode] = useState();

  useEffect(() => {
    const currentPath = location.pathname;
    console.log(currentPath)

    if( currentPath === "/"){
      SetHeaderMode("HomePageHeader");
      SetBgColor('linear-gradient( #693fd3, #693fd3,#4822a7, #4822a7)');
    }
    else if( currentPath === '/lobby' || currentPath === '/join') {
      SetHeaderMode("LogoutOnlyHeader");
      SetBgColor('#f2edf3');
    }
    else {
      SetHeaderMode("AdminHeader");
      SetBgColor('#f2edf3');
    }    
  }, [location.pathname]);


  return (
    <div style={{ background: bgColor}} id="main">
      <Header changeHeader={headerMode}/>
      {children}
    </div>
  );
}

export default App;
