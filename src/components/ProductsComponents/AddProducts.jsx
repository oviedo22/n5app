import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ResponsiveAppBar from '../common/AppBar';
import Field from '../FormComponents/Field';
import { addProduct } from '../../features/products/productsSlice';

const AddProducts = () => {
  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const onSubmit = (data) => {
    const body = {
      ...data,
    };
    dispatch(addProduct(body));
    navigateTo('/');
  };

  return (
    <Box>
      <ResponsiveAppBar />
      <Container sx={{
        marginTop: '10em', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <Typography variant="h3" component="h3" sx={{ fontWeight: 'light' }}>
            Agregá un nuevo producto
          </Typography>
        </Box>
        <Box sx={{
          marginTop: 4, display: 'flex', flexDirection: 'row', justifyContent: 'center',
        }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: 'Nombre Requerido' }}
              render={({ field, fieldState }) => <Field label="Nombre" defaultValue={undefined} onChange={field.onChange} error={fieldState.invalid} />}
            />
            <Controller
              name="price"
              control={control}
              defaultValue=""
              rules={{ required: 'Precio Requerido mayor a 1', min: 1 }}
              render={({ field, fieldState }) => <Field label="Precio" type="number" defaultValue={undefined} onChange={field.onChange} error={fieldState.invalid} />}
            />
            <Controller
              name="amount"
              control={control}
              defaultValue=""
              rules={{ required: 'Stock Requerido mayor a 1', min: 1 }}
              render={({ field, fieldState }) => <Field label="Stock" type="number" defaultValue={undefined} onChange={field.onChange} error={fieldState.invalid} />}
            />
            <input type="submit" />
          </form>
        </Box>
      </Container>
    </Box>

  );
};

export default AddProducts;
