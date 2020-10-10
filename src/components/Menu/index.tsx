import React, { FC } from 'react';
import { IconButton, Menu as MuiMenu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import { dashboardRoutes, MyRouteProps } from '../../routes';
import { Link } from 'react-router-dom';

interface Props {};

export const Menu:FC<Props> = () => {
  const listRoutes = [
    'dashboard',
    'categories.list',
    'categories.create',
    'categories.edit',
  ]
  const menuRoutes = dashboardRoutes.filter(route => listRoutes.includes(route.name))
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleOpen = (event: any) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <IconButton
        edge='start'
        color='inherit'
        aria-label='open drawer'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleOpen}
      >
        <MenuIcon />
      </IconButton>
      <MuiMenu
        id='menu-appbar'
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        transformOrigin={{vertical: 'top', horizontal: 'center'}}
        getContentAnchorEl={null}
      >
        {(listRoutes || []).map((item, key) => {
          const route = menuRoutes.find(route => route.name === item) as MyRouteProps
          return (
            <MenuItem
              key={key}
              onClick={handleClose}
              to={route.path as string}
              component={Link}
            >
              {route.label}
            </MenuItem>
          )
        })}
      </MuiMenu>
    </>
  );
};