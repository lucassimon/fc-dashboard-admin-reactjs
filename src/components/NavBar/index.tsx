import React, { FC } from 'react';
import { useStyles } from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

interface Props {};

export const NavBar:FC<Props> = () => {
  const classes = useStyles();
  return (
    <AppBar position="absolute">
      <Toolbar className={classes.toolbar}>

        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Dashboard
        </Typography>

      </Toolbar>
    </AppBar>
  );

};