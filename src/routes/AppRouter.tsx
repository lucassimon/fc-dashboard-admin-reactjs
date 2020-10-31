import React from "react";
import { Switch, Route } from 'react-router-dom';
import { mainRoutes } from '.'

export const AppRouter = () => (
  <Switch>
    {(mainRoutes || []).map((item, key) =>
      <Route
        exact={item.exact}
        key={key}
        path={item.path}
        component={item.component}
        />
    )}
  </Switch>
);
