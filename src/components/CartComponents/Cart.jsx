/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Badge, Drawer, IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SelectedProducts from './SelectedProducts';
import { remove } from '../../features/cart/cartSlice';
import { decrementAmount } from '../../features/products/productsSlice';

import Total from './Total';

const Wrapper = styled.div`
position: fixed;
z-index: 100;
right: 20px;
top: 100px;
`;

// Cart component

const Cart = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const [cartOpen, setCartOpen] = useState(false);
  const cart = useSelector((state) => state.cart.cart);

  const getTotalItems = () => cart.length;

  const success = () => {
    dispatch(decrementAmount(cart));
    navigateTo('/success');
  };

  return (
    <Wrapper data-testid="cart">
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <SelectedProducts />
        <Total />
        <Box sx={{
          textAlign: 'center',
          margin: '2em 0',
        }}
        >
          {cart.length && (
          <Button
            variant="contained"
            onClick={success}
            sx={[
              {
                backgroundColor: '#B99095',
                '&:hover': {
                  backgroundColor: '#FCB5AC',
                },
              },
            ]}
          >
            Comprar
          </Button>
          )}
          <Box sx={{
            textAlign: 'center',
            marginTop: '1em',
            marginBottom: '5em',
          }}
          >
            <Button
              variant="contained"
              onClick={() => dispatch(remove())}
              sx={[
                {
                  backgroundColor: '#B99095',
                  '&:hover': {
                    backgroundColor: '#FCB5AC',
                  },
                },
              ]}
            >
              Limpiar Carro
            </Button>
          </Box>
        </Box>
      </Drawer>

      <IconButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems()} overlap="rectangular" color="error">
          <AddShoppingCartIcon />
        </Badge>
      </IconButton>
    </Wrapper>
  );
};

export default Cart;
