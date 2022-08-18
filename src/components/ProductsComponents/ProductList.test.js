/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { persistor, store } from '../../app/store';
import ProductList from './ProductList';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('<ProductList />', () => {
  it('Debería recibir botones de productos', () => {
    act(() => {
      render(
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              <ProductList />
            </Router>
          </PersistGate>
        </Provider>,
        container,
      );
    });
    expect(screen.getByLabelText(/Cantidad/i)).toBeInTheDocument();
  });
});
