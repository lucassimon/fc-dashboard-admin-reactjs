// @flow
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@material-ui/core';

import { ButtonProps } from '@material-ui/core/Button';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';


import { paths } from '../../../routes';
import { httpVideo } from '../../../services';


import { useStyles } from './styles';
import { schema } from './validate';
import { CastMemberService } from '../../../services/cast-member-service';
import { Alert, AlertTitle } from '@material-ui/lab';

interface Props {};

interface Payload {
  name: string;
  type: number;
}

export const CastMemberAddForm: FC<Props> = () => {
  const classes = useStyles()
  const history = useHistory()
  const buttonProps: ButtonProps = {
    className: classes.submit,
    variant: "outlined",
    size: "medium"
  }
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = React.useState<Boolean>(false);
  const { register, getValues, handleSubmit, formState, errors, setValue } = useForm<Payload>({
    mode: "onBlur",
    defaultValues: {
      name: '',
      type: 1
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: Payload, event: any) => {
    debugger;
    const http = new CastMemberService(httpVideo, 'cast-members')
    const response = await http.create(data)
    if (response.status === 200 || response.status === 201) {
      setIsSuccessfullySubmitted(true)

      if (event) {
        console.log('redirect to edit')
      } else {
        history.push(paths['cast-members.list'])
      }
    }
  }

  React.useEffect(() => {
    register({name: "type"})
  }, [register]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        fullWidth
        name="name"
        label="Nome"
        variant="outlined"
        inputRef={register}
        disabled={formState.isSubmitting}
      />
      {errors.name && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {errors.name?.message}
        </Alert>
      )}
      <FormControl margin="normal">
        <FormLabel component="legend">
          Tipo
        </FormLabel>
        <RadioGroup
          name="type"
          onChange={(e) => setValue("type", parseInt(e.target.value))}
        >
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="Diretor"
          />
          <FormControlLabel
            value="2"
            control={<Radio />}
            label="Ator"
          />
        </RadioGroup>
      </FormControl>

      {isSuccessfullySubmitted && (
        <Box>Ator/Diretor salva com sucesso</Box>
      )}
      <Box dir="rtl">
        <Button
          type="submit"
          {...buttonProps}
        >
          Salvar e continuar editando
        </Button>
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