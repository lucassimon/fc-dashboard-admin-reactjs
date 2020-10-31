// @flow
import { Box, Fab } from '@material-ui/core';
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
    name: "type",
    label: "Tipo",
    options: {
      filter: true,
      sort: false,
      searchable: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        switch (Number(value)) {
          case 1:
            return "Diretor";

          default:
            return "Ator"
        }
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

export const CastMembersList: FC<Props> = () => {
  const classes = useStyles()

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    httpVideo.get('cast-members').then(
      response => setData(response.data)
    )
  }, [])

  return (
    <Page title="Membros">
      <Box dir="rtl" paddingBottom='2em'>
        <Fab
          title="Adicionar membro"
          size="small"
          component={Link}
          to='/dashboard/membros/add'

        >
          <AddIcon />
        </Fab>
      </Box>
      <Box>
        <Table
          title="Listagem de membros"
          data={data}
          columns={columns}
        />
      </Box>
    </Page>
  );
};