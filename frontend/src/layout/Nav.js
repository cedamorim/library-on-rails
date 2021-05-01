import { AppBar, Button, Toolbar, Typography, Link } from "@material-ui/core";
import { useHistory } from "react-router";
import useStyles from "../styles/styles";

const Nav = () => {
  const classes = useStyles();
  const history = useHistory();

  const home = (e) => {
    e.preventDefault();

    history.push("/");
  };

  const login = () => {
    history.push("/login");
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link href="#" onClick={home} className={classes.linkTitle}>
            Library On Rails
          </Link>
        </Typography>

        <Button onClick={login} color="inherit">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
