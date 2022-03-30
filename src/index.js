import React from "react";
import { render } from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./Editor";
import Layout from "./Layout";
import DMTHomePage from "./DMTHomePage";
//import DisplayApiData from "./DisplayData"
const appTheme = {
  styles: {
    global: {
      body: {
        backgroundColor: "#e8e8e8"
      }
    }
  }
};

const theme = extendTheme(appTheme);

const Main = () => (
  <Layout />
  /*<ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>*/
);

render(<Main />, document.getElementById("root"));
