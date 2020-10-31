// @flow
import { Box } from '@material-ui/core';
import React, { FC } from 'react';

import { Page } from '../../../components/Page';
import { GenreAddForm } from './GenreAddForm';
import { useStyles } from './styles';


interface Props {};

export const GenresAdd: FC<Props> = () => {
  const classes = useStyles()
  return (
    <Page title="Genero">
      <Box>
        <GenreAddForm />
      </Box>
    </Page>
  );
};