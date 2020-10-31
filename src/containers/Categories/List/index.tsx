// @flow
import { Box, Chip, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import React, { FC } from 'react';
import { MUIDataTableColumn } from 'mui-datatables';
import { Link } from 'react-router-dom';
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

import { Page } from '../../../components/Page';
import { Table } from '../../../components/Tables';
import { httpVideo } from '../../../services';
import { useStyles } from './styles';
import { CategoryService } from '../../../services/category-service';
import { Category } from '../../../common';
import { paths } from '../../../routes'

const columns: MUIDataTableColumn[] = [
  {
    name: "name",
    label: "Nome",
    options: {
      filter: true,
      sort: false,
      searchable: true
    }
  },
  {
    name: "is_active",
    label: "Ativo?",
    options: {
      filter: true,
      sort: false,
      searchable: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return value ? <Chip label="Sim" color="primary" /> :  <Chip label="Não" color="secondary" />
      }
    }
  },
  {
    name: "created_at",
    label: "Criado em",
    options: {
      sort: true,
      searchable: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        if (value) {
          return <span>{format(parseISO(value), 'dd/MM/yyyy')}</span>
        }

        return ''
      }
    }
  },
]


interface Props {};

export const CategoriesList: FC<Props> = () => {
  const classes = useStyles()

  const [data, setData] = React.useState<Category[]>([]);

  React.useEffect(() => {
    const http = new CategoryService(httpVideo, 'categories')
    http.list<Category[]>().then(({data}) => setData(data))
  }, [])

  return (
    <Page title="Categorias">
      <Box dir="rtl" paddingBottom='2em'>
        <Fab
          title="Adicionar categoria"
          size="small"
          component={Link}
          to={paths['categories.create']}
        >
          <AddIcon />
        </Fab>
      </Box>
      <Box>
        <Table
          title="Listagem de categorias"
          data={data}
          columns={columns}
        />
      </Box>
    </Page>
  );
};