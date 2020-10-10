import { RouteProps } from 'react-router-dom'


import { Error404 } from '../containers/Error404';
import { SignIn } from '../containers/SignIn';
import { ForgotPassword } from '../containers/ForgotPassword';
import { Dashboard } from '../containers/Dashboard';
import { Categories } from '../containers/Categories';
import { Main } from '../containers/Main';

export interface MyRouteProps extends RouteProps {
  name: string
  label: string
  private: boolean
}

export const mainRoutes: MyRouteProps[] = [
  {
    name: 'sign-in',
    label: 'Sign In',
    path: '/',
    component: SignIn,
    exact: true,
    private: false
  },
  {
    name: 'forgot-password',
    label: 'Forgot Password',
    path: '/forgot-password',
    component: ForgotPassword,
    exact: true,
    private: false
  },
  {
    name: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    component: Dashboard,
    exact: false,
    private: false
  },
  {
    name: '404',
    label: '404',
    path: '*',
    component: Error404,
    exact: false,
    private: false
  }
]

export const dashboardRoutes: MyRouteProps[] = [
  {
    name: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    component: Main,
    exact: true,
    private: false
  },
  {
    name: 'categories.list',
    label: 'Listar categorias',
    path: '/dashboard/categorias',
    component: Categories,
    exact: true,
    private: true
  },
  {
    name: '404',
    label: '404',
    path: '*',
    component: Error404,
    exact: false,
    private: false
  }
]