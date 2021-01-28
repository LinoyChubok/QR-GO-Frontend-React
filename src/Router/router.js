import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home  from '../Components/Home/Home';
import  RoutesList  from '../Components/Routes/RoutesList';
import  BuildRoute  from '../Components/Routes/BuildRoute';


const ReactRouter = () => {

  return (
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />}/>
        <Route exact path="/routes" render={props => <RoutesList {...props} />}/>
        <Route path="/route" render={props => <BuildRoute {...props} />}/>
      </Switch>
  );
}
export default ReactRouter;

