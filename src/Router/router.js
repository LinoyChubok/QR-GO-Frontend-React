import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home  from '../Components/Home/Home';
import  Routes  from '../Components/Routes/Routes';


const ReactRouter = () => {

  return (
      <Switch>
        <Route exact path="/" component={props => <Home {...props} />}/>
        <Route path="/routes" component={props => <Routes {...props} />}/>
      </Switch>
  );
}
export default ReactRouter;

