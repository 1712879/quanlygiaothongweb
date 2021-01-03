import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "stores/Author/AuthStore";
import { PAGES } from "../routerString";

const PrivateRoute = ({ component, ...rest }) => {
  // eslint-disable-line
  const [stateAuth] = useAuth();
  return stateAuth.isLogin ? (
    <Route {...rest} component={component} />
  ) : (
    <Redirect to={PAGES.LOGIN} />
  );
};

export default PrivateRoute;
