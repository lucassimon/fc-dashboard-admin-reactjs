// @flow
import { Box } from '@material-ui/core';
import React, { FC } from 'react';

import { Page } from '../../../components/Page';
import { CastMemberAddForm } from './CastMemberAddForm';
import { useStyles } from './styles';


interface Props {};

export const CastMembersAdd: FC<Props> = () => {
  const classes = useStyles()
  return (
    <Page title="Adicionar membro">
      <Box>
        <CastMemberAddForm />
      </Box>
    </Page>
  );
};