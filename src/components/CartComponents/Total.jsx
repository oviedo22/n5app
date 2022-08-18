import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { setTotal } from '../../features/cart/cartSlice';

// Total Price component

const Total = () => {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.cart.total);
  const cart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    dispatch(setTotal());
  }, []);

  if (cart.length === 0) { return <div />; }

  return (
    <Box
      data-testid="total"
      sx={{
        padding: '2em 0',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        border: '1px solid #B5E5CF',
      }}
    >
      <Typography variant="h6" sx={{ color: '#3D5B59' }}>
        TOTAL:
      </Typography>
      <Typography variant="h6" sx={{ color: '#3D5B59' }}>
        $
        {total}
      </Typography>
    </Box>
  );
};

export default Total;
