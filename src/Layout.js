import React, { Fragment } from "react";
import Header from "./Header";
import DMTHomePage from "./DMTHomePage"
import App from "./Editor"
import BannerImage from "./BannerImage";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Account from "./Account";
import Edit from "./Edit";
import Custom from "./Custom"
import Price from "./Price";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const appTheme = {
  styles: {
    global: {
      body: {
        backgroundColor: "white"
      }
    }
  }
};
const theme = extendTheme(appTheme);
const Layout = () => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={DMTHomePage} />
        <Route exact path="/Edit" component={Edit} />
        <Route exact path="/Custom" component={Custom} />
        <Route exact path="/Account" component={Account} />
        <Route exact path="/BannerImage" component={BannerImage} />
        <Route exact path="/Price" component={Price} />
      </Switch>
    </Router>





  )
}
export default Layout;