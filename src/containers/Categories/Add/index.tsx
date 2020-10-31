// @flow
import { Box } from '@material-ui/core';
import React, { FC } from 'react';

import { Page } from '../../../components/Page';
import { useStyles } from './styles';


interface Props {};

export const CategoriesAdd: FC<Props> = () => {
  const classes = useStyles()
  return (
    <Page title="Categorias">
      <Box>
        Formulario
      </Box>
    </Page>
  );
};