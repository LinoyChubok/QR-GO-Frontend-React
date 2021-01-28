import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home  from '../Components/Home/Home';
import  RoutesList  from '../Components/Routes/RoutesList';
import  BuildRoute  from '../Components/Routes/BuildRoute';
import  GamesTables  from '../Components/Games/GamesTables';
import  BuildGame  from '../Components/Games/BuildGame';


const ReactRouter = () => {
  return (
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />}/>
        <Route exact path="/routes" render={props => <RoutesList {...props} />}/>
        <Route path="/route" render={props => <BuildRoute {...props} />}/>
        <Route exact path="/games" render={props => <GamesTables {...props} />}/>
        <Route path="/game" render={props => <BuildGame {...props} />}/>
      </Switch>
  );
}
export default ReactRouter;

