import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "./services/auth";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const auth = new Auth();
  return (
    <Route
      {...rest}
      render={props => {
        console.log("AUTH :: ", auth.isAuthenticated());
        if (auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
