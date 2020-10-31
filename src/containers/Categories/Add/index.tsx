// @flow
import { Box } from '@material-ui/core';
import React, { FC } from 'react';

import { Page } from '../../../components/Page';
import { CategoryAddForm } from './CategoryAddForm';
import { useStyles } from './styles';


interface Props {};

export const CategoriesAdd: FC<Props> = () => {
  const classes = useStyles()
  return (
    <Page title="Criar categoria">
      <Box>
        <CategoryAddForm />
      </Box>
    </Page>
  );
};