import React from "react";

import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Auth from "../pages/Auth";
import Product from "../pages/Product";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import Oder from "../pages/Oder";

import AuthContextProvider from "../contexts/AuthContext";
// import Events from "../pages/Events";
// import Blog from "../pages/Blog";
// import Contact from "../pages/Contact";

const Routes = () => {
  return (
    <AuthContextProvider>
          <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/login" exact render={props => <Auth {...props} authRoute="login"/>}/>
          <Route path="/register" exact render={props => <Auth {...props} authRoute="register"/>}/>
          <Route path="/product/" component={Product} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/oder/" component={Oder} />
        </Switch>
    </AuthContextProvider>
  );
};

export default Routes;
