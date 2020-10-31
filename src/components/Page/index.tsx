import { Box, Container, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { Copyright } from '../Copyright';
import { useStyles } from './styles';
import RouterBreadcrumbs from '../../components/BreadCrumb';
interface Props {
  title: string
};

export const Page:FC<Props> = ({ title, children }) => {
  const classes = useStyles()
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography
        className={classes.title}
        component="h1"
        variant="h5"
      >
        {title}
      </Typography>
      <RouterBreadcrumbs />
      <Box paddingTop='1px'>
        {children}
      </Box>
      <Box pt={4}>
        <Copyright />
      </Box>
    </Container>
  );
};