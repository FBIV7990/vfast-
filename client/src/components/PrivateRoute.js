import React from "react";
import { Route, Redirect } from "react-router-dom";
import { userService } from "../services";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  // const result= userService.isSignedIn();
  const result = true;
  return (
    <Route
      {...rest}
      render={(props) =>
        result === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
