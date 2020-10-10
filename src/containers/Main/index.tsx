// @flow
import { Box, Container, Grid, Paper } from '@material-ui/core';
import React, { FC } from 'react';
import { Copyright } from '../../components/Copyright';
import { Page } from '../../components/Page';
import { useStyles } from './styles';
interface Props {};

export const Main: FC<Props> = () => {
  const classes = useStyles()
  return (
    <Page title="Dashboard">
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={classes.paper}>
            Chart
          </Paper>
        </Grid>
        {/*  */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={classes.paper}>
            Recent Deposits
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Recent Orders
          </Paper>
        </Grid>
      </Grid>
    </Page>
  );
};