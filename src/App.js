import './App.css';
import Header from './Components/Header';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage'


const App = ( {children} ) => {

  const location = useLocation();

  const [bgColor, SetBgColor] = useState();
  const [headerMode, SetHeaderMode] = useState();
  const [user] = useLocalStorage('user');

  useEffect(() => {
    const currentPath = location.pathname;

    if(user) {
      if( user.role === 'player' || ( user.role === 'admin' && currentPath === '/lobby')) {
        SetHeaderMode("LogoutOnlyHeader");
        SetBgColor('#f2edf3');
      }
      else if(user.role === 'admin'){
        SetHeaderMode("AdminHeader");
        SetBgColor('#f2edf3');
      }    
  }
  else {
    SetHeaderMode("HomePageHeader");
    SetBgColor('linear-gradient( #693fd3, #693fd3,#4822a7, #4822a7)');
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