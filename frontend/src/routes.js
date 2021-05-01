import { Route, Switch, Redirect } from "react-router-dom";

import Index from "./pages/Index";
import Login from "./pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/login" component={Login} />
      {/* <Route exact path="/products/:id" component={Edit} /> */}
      {/* <Route exact path='/notfound' component={NotFound} /> */}
      <Redirect path="*" to="/notfound" />
    </Switch>
  );
};

export default Routes;