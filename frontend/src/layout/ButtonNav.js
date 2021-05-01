import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import auth from "../auth";

const ButtonNav = () => {
  const history = useHistory();

  const onLogin = () => {
    history.push("/login");
  };

  const onLogout = () => {
    auth.logout();

    history.push("/");
  };

  if (auth.isAuthenticated()) {
    return (
      <Button onClick={onLogout} color="inherit">
        Sair
      </Button>
    );
  }

  return (
    <Button onClick={onLogin} color="inherit">
      Entrar
    </Button>
  );
};

export default ButtonNav;
