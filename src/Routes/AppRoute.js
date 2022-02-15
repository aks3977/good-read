import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from '../container/home';
import Login from "../container/login";
import signUp from '../container/signUp';

function AppRoute(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={signUp}/>
            </Switch>

            
        </div>
    );
}

export default AppRoute;