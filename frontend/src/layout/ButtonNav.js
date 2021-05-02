import { Button } from "@material-ui/core";
import Store from "../store";
import auth from "../auth";
import { useHistory } from "react-router";
import { useStoreState } from "pullstate";

const ButtonNav = () => {
  const history = useHistory();
  const { isAuthenticated } = useStoreState(Store);

  const onLogin = () => {
    history.push("/login");
  };

  const onLogout = () => {
    auth.logout();

    history.push("/");
  };

  if (isAuthenticated) {
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
