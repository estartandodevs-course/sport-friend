import React from 'react';

import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import Perfil from './components/Perfil/perfil';
import Atividades from './components/MinhasAtividades/atividades';

export default function Routers() {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/perfil" component={Perfil} />
            <Route path="/MinhasAtividades" component={Atividades} />
            
        </Switch>
        </BrowserRouter>
    );
}