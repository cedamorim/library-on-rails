import { Redirect, Route, Switch } from "react-router-dom";

import Edit from "./pages/Edit";
import Index from "./pages/Index";
import Login from "./pages/Login";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import Store from "./store";
import auth from "./auth";

const PrivateRoutes = () => {
  if (!auth.isAuthenticated()) {
    Store.update((s) => {
      s.alert = {
        type: "warning",
        title: "Login requerido",
        message:
          "Ops, esta página é protegida e depende de um acesso de administrador.",
      };
    });

    return <Redirect to="/" />;
  }

  return (
    <Switch>
      <Route exact path="/books/add" component={New} />
      <Route exact path="/books/:id" component={Edit} />
    </Switch>
  );
};

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/login" component={Login} />
      <PrivateRoutes />
      <Route exact path="/notfound" component={NotFound} />
      <Redirect path="*" to="/notfound" />
    </Switch>
  );
};

export default Routes;
