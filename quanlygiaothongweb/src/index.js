import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import Login from "views/Login/Login";
import Signup from "views/Login/Signup";
import PrivateRoute from "layouts/PrivateRoute";
import { ToastContainer } from "react-toastify";
// import LinearProgress from "@material-ui/core/LinearProgress";

import "assets/css/material-dashboard-react.css?v=1.9.0";
import "react-toastify/dist/ReactToastify.css";
import CapNhatBanGhi from "views/Admin_LuuTruXe/Admin_CapNhatBanGhi";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    {/* <LinearProgress color="primary"/> */}
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      limit={1}
    />
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/admin/CapNhatBanGhi/:ID" component={CapNhatBanGhi} />
      <PrivateRoute path="/admin" component={Admin} />
      <PrivateRoute path="/rtl" component={RTL} />

      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
