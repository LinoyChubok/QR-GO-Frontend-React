import React from 'react';
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
import PlayerRoute from './PlayerRoute'

const ReactRouter = () => {

  const [user] = useLocalStorage('user');

  return (
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />}/>
        <AdminRoute exact path="/routes" component={RoutesList} user={user}/>
        <AdminRoute exact path="/route" component={BuildRoute} user={user}/>
        <AdminRoute exact path="/games" component={GamesTables} user={user}/>
        <AdminRoute exact path="/game" component={BuildGame} user={user}/>
        <AdminRoute exact path="/lobby" component={Lobby} user={user}/>
        <PlayerRoute exact path="/join"  component={Join} user={user}/>
        <Route path='*' render={props =><NotFound {...props} />} />
      </Switch>
  );
}
export default ReactRouter;

