import React from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import ResponsiveAppBar from './AppBar';

const SuccessBuy = () => (

  <Box>
    <ResponsiveAppBar />
    <Box sx={{
      margin: '0 auto',
      marginTop: '3em',
    }}
    >
      <Alert severity="success">Bien Hecho!, Compra realizada con éxito!</Alert>
    </Box>
  </Box>

);

export default SuccessBuy;
