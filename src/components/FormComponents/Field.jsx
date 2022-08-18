/* eslint-disable react/prop-types */
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

const Field = ({
  label, variant, onChange, error, type, defaultValue,
}) => (
  <Box sx={{ marginBottom: '4em' }}>
    <TextField
      label={label}
      type={type}
      variant={variant}
      defaultValue={defaultValue}
      InputLabelProps={{
        shrink: true,
      }}
      error={error}
      sx={{ display: 'block', width: '15rem', marginBottom: '2rem' }}
      onChange={onChange}
    />
    {error && <Alert sx={{ padding: 0 }} severity="error">Tienes errores en los siguientes campos</Alert>}
  </Box>

);

Field.defaultProps = {
  type: 'text',
  error: false,
  variant: 'filled',
};

export default Field;
