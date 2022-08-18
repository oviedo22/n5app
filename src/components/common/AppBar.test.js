/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import ResponsiveAppBar from './AppBar';

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

describe('<NavBar />', () => {
  it('Debería recibir app bar', () => {
    act(() => {
      render(<Router><ResponsiveAppBar /></Router>, container);
    });
    expect(container.textContent).toBe('N5 AppGeneralAgregar StockAgregar ProductosTest');
  });
});
