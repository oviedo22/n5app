import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ErrorPage from '../components/common/ErrorPage';
import ProductList from '../components/ProductsComponents/ProductList';
import StockProductList from '../components/ProductsComponents/StockProductList';
import Addproducts from '../components/ProductsComponents/AddProducts';
import LogicalTest from '../components/TestLogicalComponents/LogicalTest';
import SuccessBuy from '../components/common/SuccessBuy';

const AppRouter = () => (
  <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route exact path="/addStock" element={<StockProductList />} />
        <Route exact path="/addProducts" element={<Addproducts />} />
        <Route exact path="/success" element={<SuccessBuy />} />
        <Route exact path="/test" element={<LogicalTest />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  </Router>
);

export default AppRouter;
