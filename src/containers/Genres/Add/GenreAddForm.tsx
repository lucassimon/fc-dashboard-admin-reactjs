// @flow
import { Box, Button, MenuItem, TextField } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

import { ButtonProps } from '@material-ui/core/Button';

import React, { FC } from 'react';
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';


import { paths } from '../../../routes';
import { httpVideo } from '../../../services';


import { useStyles } from './styles';
import { schema } from './validate';
import { GenreService } from '../../../services/genre-service';
import { Category } from '../../../common';
import { CategoryService } from '../../../services/category-service';

interface Props {};

interface Payload {
  name: string;
  categories_id: any;
}

export const GenreAddForm: FC<Props> = () => {
  const classes = useStyles()
  const history = useHistory()
  const buttonProps: ButtonProps = {
    className: classes.submit,
    variant: "outlined",
    size: "medium"
  }
  const [categories, setCategories] = React.useState<Category[]>([])
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = React.useState<Boolean>(false);
  const { register, handleSubmit, formState, errors, setValue, watch } = useForm<Payload>({
    mode: "onBlur",
    defaultValues: {
      categories_id: [],
      name: '',
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: Payload, event: any) => {

    const http = new GenreService(httpVideo, 'genres')
    const response = await http.create(data)
    if (response.status === 200 || response.status === 201) {
      setIsSuccessfullySubmitted(true)

      if (event) {
        console.log('redirect to edit')
      } else {
        history.push(paths['genres.list'])
      }
    }
  }

  React.useEffect(() => {
    register({name: "categories_id"})
  }, [register])

  React.useEffect(() => {
    const http = new CategoryService(httpVideo, 'categories')
    http.list<Category[]>().then(({data}) => setCategories(data))
  }, [])

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
        select
        fullWidth
        name="categories_id"
        value={watch('categories_id')}
        label="Categorias"
        margin="normal"
        variant="outlined"
        disabled={formState.isSubmitting}
        onChange={(event) => setValue('categories_id', event.target.value, { shouldValidate: true })}
        SelectProps={{
          multiple: true
        }}
      >
        <MenuItem value="">
          <em>Selecione as categorias</em>
        </MenuItem>
        {categories.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </TextField>

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