// @flow
import React, { FC } from 'react';
import { Page } from '../../components/Page';
import { useStyles } from './styles';

interface Props {};

export const Categories: FC<Props> = () => {
  const classes = useStyles()
  return (
    <Page title="Categorias">
    </Page>
  );
};