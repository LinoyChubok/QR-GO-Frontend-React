import React, {useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage'
import Home  from '../Components/Home/Home';
import RoutesList  from '../Components/Routes/RoutesList';
import BuildRoute  from '../Components/Routes/BuildRoute';
import GamesTables  from '../Components/Games/GamesTables';
import BuildGame  from '../Components/Games/BuildGame';
import Lobby  from '../Components/Lobby/Lobby';
import Join  from '../Components/Join/Join';
import NotFound  from '../Components/NotFound/NotFound';
import AdminRoute from './AdminRoute'
import { useLocation } from 'react-router-dom';


const ReactRouter = () => {

  const [user, setUser] = useLocalStorage('user');
  const location = useLocation();
  const currentPath = location.pathname;

  console.log(`path: ${currentPath} , user: ${user}`);

  return (
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />}/>
        <Route path="/routes" render={props => <RoutesList {...props} />}/>
        <Route path="/route" render={props => <BuildRoute {...props} />}/>

        <AdminRoute path="/games" component={GamesTables} user={user}/>

        <Route path="/game" render={props => <BuildGame {...props} />}/>
        <Route path="/lobby" render={props => <Lobby {...props} />}/>
        <Route path="/join" render={props => <Join {...props} user={user} />}/>
        <Route path='*' exact={true} render={props =><NotFound {...props} />} />
      </Switch>
  );
}
export default ReactRouter;

