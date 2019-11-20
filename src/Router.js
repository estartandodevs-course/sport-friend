import React from 'react';

import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Home from './pages/Home/home';
import Login from './pages/Login/login';

export default function Routers() {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Login" component={Login} />
            

        </Switch>
        </BrowserRouter>
    );
}
