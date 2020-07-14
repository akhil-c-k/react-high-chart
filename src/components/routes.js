import React from "react";
import { Route, Switch ,Redirect} from "react-router-dom";
import Login from './Login'
import Landing from './Landing'
import PrivateRoute from '../components/PrivateRoute'
import PageNotfound from '../components/PageNotfound'


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
     <PrivateRoute path="/landing" component={Landing} exact={true}/>
     <Route component={PageNotfound} />
</Switch>
);

export default Routes;
