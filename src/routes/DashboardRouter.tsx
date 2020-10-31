import React from "react";
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Main } from '../containers/Main';
import { dashboardRoutes } from '.'
import { useStyles } from "./styles";

export const DashboardRouter = () => {
  const match = useRouteMatch();
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Switch>
        <Route
          exact
          path={`${match.url}`}
          component={Main}
        />
        {(dashboardRoutes || []).map((item, key) =>
          <Route
            key={key}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        )}

      </Switch>
    </main>
  );
}
