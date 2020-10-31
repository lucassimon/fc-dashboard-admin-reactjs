// @flow
import { Box, Button, Checkbox, TextField } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

import { ButtonProps } from '@material-ui/core/Button';

import React, { FC } from 'react';
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';


import { paths } from '../../../routes';
import { httpVideo } from '../../../services';
import { CategoryService } from '../../../services/category-service';


import { useStyles } from './styles';
import { schema } from './validate';

interface Props {};

interface Payload {
  name: string;
  description: string;
  is_active: Boolean
}

export const CategoryAddForm: FC<Props> = () => {
  const classes = useStyles()
  const history = useHistory()
  const buttonProps: ButtonProps = {
    className: classes.submit,
    variant: "outlined",
    size: "medium"
  }
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = React.useState<Boolean>(false);
  const { register, handleSubmit, formState, errors } = useForm<Payload>({
    mode: "onBlur",
    defaultValues: {
      is_active: true,
      name: '',
      description: ''
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: Payload, event: any) => {

    const http = new CategoryService(httpVideo, 'categories')
    const response = await http.create(data)
    if (response.status === 200 || response.status === 201) {
      setIsSuccessfullySubmitted(true)

      if (event) {
        console.log('redirect to edit')
      } else {
        history.push(paths['categories.list'])
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        fullWidth
        name="name"
        label="Nome"
        variant="outlined"
        margin="normal"
        inputRef={register}
        disabled={formState.isSubmitting}
      />

      {errors.name && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {errors.name?.message}
        </Alert>
      )}

      <TextField
        fullWidth
        name="description"
        label="Descrição"
        multiline
        rows="4"
        variant="outlined"
        margin="normal"
        inputRef={register}
        disabled={formState.isSubmitting}
      />
      {errors.description && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {errors.description?.message}
        </Alert>
      )}
      <div>
        <Checkbox
          defaultChecked
          name="is_active"
          inputRef={register}
          disabled={formState.isSubmitting}
        />
        Ativo ?
      </div>
      {formState.isSubmitting && <Box>Loading</Box>}

      {isSuccessfullySubmitted && (
        <Box>Categoria salva com sucesso</Box>
      )}
      <Box dir="rtl">
        <Button
          type="submit"
          {...buttonProps}

        >
          Salvar e continuar editando
        </Button>
        {/* <Button
          onClick={() => onSubmit(getValues(), null)}
          {...buttonProps}
        >
          Salvar
        </Button> */}
        <Button
          type="reset"
          {...buttonProps}
        >
          Limpar
        </Button>
      </Box>
    </form>
  );
};