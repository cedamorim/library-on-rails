import { Route, Switch, Redirect } from "react-router-dom";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Edit from "./pages/Edit";
import New from "./pages/New";
import NotFound from "./pages/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/books/add" component={New} />
      <Route exact path="/books/:id" component={Edit} />
      <Route exact path='/notfound' component={NotFound} />
      <Redirect path="*" to="/notfound" />
    </Switch>
  );
};

export default Routes;