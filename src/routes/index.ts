import { RouteProps } from 'react-router-dom'


import { Error404 } from '../containers/Error404';
import { SignIn } from '../containers/SignIn';
import { ForgotPassword } from '../containers/ForgotPassword';
import { Dashboard } from '../containers/Dashboard';
import { Main } from '../containers/Main';
import { CategoriesList, CategoriesAdd, CategoriesEdit  } from '../containers/Categories';
import { CastMembersAdd, CastMembersList } from '../containers/CastMembers';
import { GenresAdd, GenresList, GenresEdit } from '../containers/Genres';

export interface MyRouteProps extends RouteProps {
  name: string
  label: string
  private: boolean
}

export const paths = {
  "sign-in": "/",
  "forgot-password": "/forgot-password",
  "dashboard": "/dashboard",
  "categories.list": "/dashboard/categorias",
  "categories.create": "/dashboard/categorias/add",
  "categories.edit": "/dashboard/categorias/:id/edit",
  "cast-members.list": "/dashboard/membros",
  "cast-members.create": "/dashboard/membros/add",
  "cast-members.edit": "/dashboard/membros/:id/edit",
  "genres.list": "/dashboard/generos",
  "genres.create": "/dashboard/generos/add",
  "genres.edit": "/dashboard/generos/:id/edit",
}

export const mainRoutes: MyRouteProps[] = [
  {
    name: 'sign-in',
    label: 'Sign In',
    path: paths['sign-in'],
    component: SignIn,
    exact: true,
    private: false
  },
  {
    name: 'forgot-password',
    label: 'Forgot Password',
    path: paths['forgot-password'],
    component: ForgotPassword,
    exact: true,
    private: false
  },
  {
    name: 'dashboard',
    label: 'Dashboard',
    path: paths.dashboard,
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
    path: paths.dashboard,
    component: Main,
    exact: true,
    private: false
  },
  {
    name: 'categories.list',
    label: 'Categorias',
    path: paths['categories.list'],
    component: CategoriesList,
    exact: true,
    private: true
  },
  {
    name: 'categories.create',
    label: 'Adicionar categorias',
    path: paths['categories.create'],
    component: CategoriesAdd,
    exact: true,
    private: true
  },
  {
    name: 'categories.edit',
    label: 'Editar categorias',
    path: paths['categories.edit'],
    component: CategoriesEdit,
    exact: true,
    private: true
  },
  {
    name: 'cast-members.list',
    label: 'Membros',
    path: paths['cast-members.list'],
    component: CastMembersList,
    exact: true,
    private: true
  },
  {
    name: 'cast-members.create',
    label: 'Adicionar membro',
    path: paths['cast-members.create'],
    component: CastMembersAdd,
    exact: true,
    private: true
  },
  {
    name: 'cast-members.edit',
    label: 'Editar membro',
    path: paths['cast-members.edit'],
    component: CastMembersList,
    exact: true,
    private: true
  },
  {
    name: 'genres.list',
    label: 'Generos',
    path: paths['genres.list'],
    component: GenresList,
    exact: true,
    private: true
  },
  {
    name: 'genres.create',
    label: 'Adicionar genero',
    path: paths['genres.create'],
    component: GenresAdd,
    exact: true,
    private: true
  },
  {
    name: 'genres.edit',
    label: 'Editar genero',
    path: paths['genres.edit'],
    component: GenresEdit,
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