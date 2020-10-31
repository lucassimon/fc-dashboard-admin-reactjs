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
    label: 'Categorias',
    path: '/dashboard/categorias',
    component: CategoriesList,
    exact: true,
    private: true
  },
  {
    name: 'categories.create',
    label: 'Adicionar categorias',
    path: '/dashboard/categorias/add',
    component: CategoriesAdd,
    exact: true,
    private: true
  },
  {
    name: 'categories.edit',
    label: 'Editar categorias',
    path: '/dashboard/categorias/:id/edit',
    component: CategoriesEdit,
    exact: true,
    private: true
  },
  {
    name: 'cast-members.list',
    label: 'Membros',
    path: '/dashboard/membros',
    component: CastMembersList,
    exact: true,
    private: true
  },
  {
    name: 'cast-members.create',
    label: 'Adicionar membro',
    path: '/dashboard/membros/add',
    component: CastMembersAdd,
    exact: true,
    private: true
  },
  {
    name: 'cast-members.edit',
    label: 'Editar membro',
    path: '/dashboard/membros/:id/edit',
    component: CastMembersList,
    exact: true,
    private: true
  },
  {
    name: 'genres.list',
    label: 'Generos',
    path: '/dashboard/generos',
    component: GenresList,
    exact: true,
    private: true
  },
  {
    name: 'genres.create',
    label: 'Adicionar genero',
    path: '/dashboard/generos/add',
    component: GenresAdd,
    exact: true,
    private: true
  },
  {
    name: 'genres.edit',
    label: 'Editar genero',
    path: '/dashboard/generos/:id/edit',
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