import React from 'react'
import Link, { LinkProps } from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import { Route, useHistory, Link as RouterLink } from 'react-router-dom';


import { useStyles } from './styles'

const breadcrumbNameMap: { [key: string]: string } = {
  '/dashboard': 'Principal',
  '/dashboard/categorias': 'Categorias',
};

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => <Link {...props} component={RouterLink as any} />;

export default function RouterBreadcrumbs() {
  const classes = useStyles();
  const history = useHistory();

  return (

    <div className={classes.root}>
      <Route>
        {({ location }) => {
          const pathnames = location.pathname.split('/').filter((x) => x);

          return (
            <Breadcrumbs aria-label="breadcrumb">
              <LinkRouter color="inherit" to="/dashboard">
                Dashboard
              </LinkRouter>
              {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return last ? (
                  <Typography color="textPrimary" key={to}>
                    {breadcrumbNameMap[to]}
                  </Typography>
                ) : (
                  <LinkRouter color="inherit" to={to} key={to}>
                    {breadcrumbNameMap[to]}
                  </LinkRouter>
                );
              })}
            </Breadcrumbs>
          );
        }}
      </Route>
    </div>
  );
}