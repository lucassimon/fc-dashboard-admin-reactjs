// @flow
import React, { FC } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { NavBar } from '../../components/NavBar';
import { useStyles } from './styles';
import { Main } from '../Main';
interface Props {};

export const Dashboard: FC<Props> = () => {
  const match = useRouteMatch();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Switch>
        <Route
          exact
          path={`${match.url}`}
          component={Main}
        />
      </Switch>
      </main>
    </div>
  );
};