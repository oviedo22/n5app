/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Alert from '@mui/material/Alert';
import { add } from '../../features/cart/cartSlice';

const ButtonAddCart = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 2em 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    color: #ffffff;
    background-color: palevioletred;
  }
`;

// Product Form to add new items to cart

const ProductCard = ({ product, total, index }) => {
  const dispatch = useDispatch();
  const max = useSelector((state) => state.product.products.products[index].amount);
  // const max = product.amount;
  const [quantity, setQuantity] = useState(total || 0);
  const [warning, setWarning] = useState(false);

  const handleProductChange = (e) => {
    setQuantity(e.target.value);
    if (quantity >= max) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  };

  const decrementQuantity = () => {
    setQuantity(quantity - 1);
    if (quantity > max) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    if (quantity >= max) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantity > max) {
      setWarning(true);
    } else {
      const body = {
        quantity,
        product,
      };
      dispatch(add(body));
      setQuantity(0);
    }
  };

  return (
    <Card sx={{ borderBottom: '0px' }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h5">
          {product.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          $
          {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button size="medium" onClick={incrementQuantity}><AddIcon /></Button>
            <TextField
              id="outlined-number"
              value={quantity}
              inputProps={{ min: 1, max: { max } }}
              rules={{ required: false }}
              label="Cantidad"
              type="number"
              error={warning}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleProductChange}
            />
            <Button size="medium" onClick={decrementQuantity}><HorizontalRuleIcon /></Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ButtonAddCart type="submit">Agregar al carro</ButtonAddCart>
          </Box>
        </form>
      </CardActions>
      {warning ? <Alert severity="warning">Upsi! Quedan solo estas unidades: Stock {product.amount}</Alert> : <div />}
    </Card>
  );
};

export default ProductCard;
