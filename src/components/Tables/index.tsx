// @flow
import { Box } from '@material-ui/core';
import React, { FC } from 'react';

import { useStyles } from './styles';
import MUIDataTable, { MUIDataTableColumn } from "mui-datatables";


interface Props {
  title: string
  columns: MUIDataTableColumn[]
  data: any
};

export const Table: FC<Props> = ({ title, data, columns }) => {
  const classes = useStyles()
  return (
    <Box>
      <MUIDataTable
        title={title}
        data={data}
        columns={columns}
      />
    </Box>
  );
};