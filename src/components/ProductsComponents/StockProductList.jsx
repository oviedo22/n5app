import * as React from 'react';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ProductStockCard from './ProductStockCard';
import ResponsiveAppBar from '../common/AppBar';

// List of Products, you can set the new amount

const StockProductList = () => {
  const products = useSelector((state) => state.product.products.products);

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
            products.map((product) => (

              <Box key={product.id} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ProductStockCard product={product} />
              </Box>
            ))
          }
        </Box>
      </Container>
    </Box>

  );
};

export default StockProductList;
