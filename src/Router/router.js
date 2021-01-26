import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home  from '../Components/Home/Home';
import  RoutesList  from '../Components/Routes/RoutesList';


const ReactRouter = () => {

  return (
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />}/>
        <Route path="/routes" render={props => <RoutesList {...props} />}/>
      </Switch>
  );
}
export default ReactRouter;

