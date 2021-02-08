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
      if( ((currentPath === '/join' || currentPath === '/join/') && user.role === 'player') || ((currentPath === '/play' || currentPath === '/play/') && user.role === 'player') || ((currentPath === '/lobby' || currentPath === '/lobby/') && user.role === 'admin' )) {
        SetHeaderMode("LogoutOnlyHeader");
        SetBgColor('#f2edf3');
      }
      else if(user.role === 'admin' && 
      ((currentPath === '/games' || currentPath === '/games/') || (currentPath === '/game' || currentPath === '/game/') ||
       (currentPath === '/routes' || currentPath === '/routes/') || (currentPath === '/route' || currentPath === '/route/'))){
        SetHeaderMode("AdminHeader");
        SetBgColor('#f2edf3');
      } else {
        SetHeaderMode("NotFoundHeader");
        SetBgColor('white');
      } 
    }
    else if (currentPath === '/') {
      SetHeaderMode("HomePageHeader");
      SetBgColor('linear-gradient( #693fd3, #693fd3,#4822a7, #4822a7)');
    }
    else {
      SetHeaderMode("NotFoundHeader");
      SetBgColor('white');
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