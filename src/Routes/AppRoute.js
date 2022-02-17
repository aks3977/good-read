import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from '../container/home';
import Login from "../container/login";
import signUp from '../container/signUp';
import Dashboard from '../container/dashboard';
import DetailsPage from '../container/DetailsPage';

function AppRoute(props) {

    const getToken = () => {
        return localStorage.getItem("login") || null;
    }

    const PublicRoute = ({component:Component, ...rest}) => {
        return(
          <Route
          {...rest}
          render={props => {
            return !getToken() ? (<Component {...props}/>)
            : (<Redirect to={{pathname:"/dashboard"}}/>)
            }}
          />
        )
      }

      const PrivateRoute = ({component:Component, ...rest}) => {
        return (
          <Route
          {...rest}
           render={props => {
             return getToken() ? <Component {...props}/>
             : <Redirect to={{pathname:"/login"}}/>
             }}
          />
        )
      }

    return (
        <div>
            <Switch>
                <PublicRoute exact path = "/" component={Home}/>
                <PublicRoute path = "/login" component={Login}/>
                <PublicRoute path = "/signup" component={signUp}/>
                <PrivateRoute path = "/dashboard" component={Dashboard}/>
                <PrivateRoute path = "/details" component={DetailsPage}/>

            </Switch>

            
        </div>
    );
}

export default AppRoute;