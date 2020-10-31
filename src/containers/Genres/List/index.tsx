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
import { Category } from '../../../common';

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
    name: "categories",
    label: "Categorias",
    options: {
      filter: true,
      sort: false,
      searchable: false,
      customBodyRender: (value: any, tableMeta, updateValue) => {
        const categoriesMap = (value || []).map((item: Category) => item.name)
        return categoriesMap.join(", ")
      }
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
        return <span>{format(parseISO(value), 'dd/MM/yyyy')}</span>
      }
    }
  },
]


interface Props {};

export const GenresList: FC<Props> = () => {
  const classes = useStyles()

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    httpVideo.get('genres').then(
      response => setData(response.data)
    )
  }, [])

  return (
    <Page title="Genres">
      <Box dir="rtl" paddingBottom='2em'>
        <Fab
          title="Adicionar genero"
          size="small"
          component={Link}
          to='/dashboard/generos/add'

        >
          <AddIcon />
        </Fab>
      </Box>
      <Box>
        <Table
          title="Listagem de generos"
          data={data}
          columns={columns}
        />
      </Box>
    </Page>
  );
};