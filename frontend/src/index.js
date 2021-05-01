import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import App from "./App";
import { BrowserRouter as Router, Route } from 'react-router-dom'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Router>
      <Route path="/" component={App} />
    </Router>,
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
