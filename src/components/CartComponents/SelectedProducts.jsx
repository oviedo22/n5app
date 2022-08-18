import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import ProductCard from '../ProductsComponents/ProductCard';

// Productos seleccionados del Carro de compras

const SelectedProducts = () => {
  const cart = useSelector((state) => state.cart.cart);
  if (cart.length === 0) {
    return (
      <Box data-testid="selected">

        <Box sx={{
          marginTop: '3em',
          padding: '0 1em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '12em',
        }}
        >
          <Typography variant="caption" sx={{ fontSize: '.9em', fontWeight: 'light' }}>
            Tu carrito está vacío, porque no le agregas algunos productos? :P
          </Typography>
        </Box>

      </Box>
    );
  }
  return (
    <Box sx={{
      maxWidth: '15em',
    }}
    >
      {
        cart.map((product, index) => (

          <Box key={product.id} sx={{ width: '100%' }}>
            <ProductCard product={product.product} total={product.quantity} index={index} />
            <Box sx={{
              padding: '1em 0',
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              backgroundColor: '#B5E5CF',
            }}
            >
              <Typography variant="h6" sx={{ color: '#3D5B59' }}>
                CANTIDAD:
              </Typography>
              <Typography variant="h6" sx={{ color: '#3D5B59' }}>
                {product.quantity}
              </Typography>
            </Box>
            <Divider />
          </Box>
        ))
      }
    </Box>
  );
};

export default SelectedProducts;
