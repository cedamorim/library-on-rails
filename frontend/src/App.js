import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from "./routes";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav";
import useStyles from './styles/styles';

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <Nav />
        <main >
          <Routes />
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}
