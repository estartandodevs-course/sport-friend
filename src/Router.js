import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import Perfil from "./pages/Perfil/perfil";
import MyActivities from "./pages/MyActivities/myActivities";
import ScheduledActivities from "./pages/ScheduledActivities/scheduledActivities";
import { ProtectedRoute } from "./protected.route.js";

export default function Routers() {
  return (
    <BrowserRouter Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <ProtectedRoute path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <ProtectedRoute path="/perfil" component={Perfil} />
        <ProtectedRoute path="/my-activities" component={MyActivities} />
        <ProtectedRoute path="/scheduled-activities" component={ScheduledActivities} />
      </Switch>
    </BrowserRouter>
  );
}
