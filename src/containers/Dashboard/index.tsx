// @flow
import React, { FC } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { NavBar } from '../../components/NavBar';
import { useStyles } from './styles';
import { DashboardRouter } from '../../routes/DashboardRouter';

interface Props {};

export const Dashboard: FC<Props> = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <DashboardRouter />
    </div>
  );
};