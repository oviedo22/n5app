import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ResponsiveAppBar from '../common/AppBar';
import ProductCard from './ProductCard';
import Cart from '../CartComponents/Cart';
import { reset } from '../../features/products/productsSlice';

// Products Dashboard

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products.products);
  // dispatch(reset());

  return (
    <Box>
      <ResponsiveAppBar />
      <Container sx={{
        margin: '0 auto',
        minHeight: '10vh',
      }}
      >
        <Box sx={{
          display: 'grid',
          '@media (min-height:800px)': {
            gridTemplateColumns: 'repeat(3 , 1fr)',
          },
          gridGap: '5em',
          margin: '0 auto',
        }}
        >
          {
            products.map((product, index) => (

              <Box key={product.id} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ProductCard product={product} index={index} />
              </Box>
            ))
          }
        </Box>
        <Cart />
      </Container>

    </Box>
  );
};

export default ProductList;
