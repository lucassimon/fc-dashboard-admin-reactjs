import React from 'react'
import { Location } from 'history'
import Link, { LinkProps } from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import { Route, Link as RouterLink } from 'react-router-dom';
import RouteParser from 'route-parser'
import { useStyles } from './styles'
import { Container } from '@material-ui/core'

const breadcrumbNameMap: { [key: string]: string } = {
  '/dashboard': 'Dashboard',
  '/dashboard/categorias': 'Listar categorias',
  '/dashboard/categorias/add': 'Adicionar categorias',
  '/dashboard/categorias/:id/edit': 'Editar categorias',
};


interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => <Link {...props} component={RouterLink as any} />;

export default function RouterBreadcrumbs() {
  const classes = useStyles();

  function makeBreadcrumb(location: Location) {
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
      <Breadcrumbs aria-label="breadcrumb">
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;

          const to = `/${pathnames.slice(0, index + 1).join('/').replace("//", "")}`;

          const route = Object.keys(breadcrumbNameMap).find(path => new RouteParser(path).match(to))

          if (route === undefined) {
            return false
          }

          return last ? (
            <Typography color="textPrimary" key={to}>
              {breadcrumbNameMap[route]}
            </Typography>
          ) : (
            <LinkRouter
              color="inherit"
              to={to}
              key={to}
              className={classes.linkRouter}
            >
              {breadcrumbNameMap[route]}
            </LinkRouter>
          );
        })}
      </Breadcrumbs>
    );
  }

  return (
    <Container>
      <Route>
        {
          ({ location }: { location: Location }) => makeBreadcrumb(location)
        }
      </Route>
    </Container>
  );
}