import { AppBar, Link, Toolbar, Typography } from "@material-ui/core";

import ButtonNav from "./ButtonNav";
import { useHistory } from "react-router";
import useStyles from "../styles/styles";

const Nav = () => {
  const classes = useStyles();
  const history = useHistory();

  const onHome = (e) => {
    e.preventDefault();

    history.push("/");
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link href="#" onClick={onHome} className={classes.linkTitle}>
            Library On Rails
          </Link>
        </Typography>
        <ButtonNav />
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
