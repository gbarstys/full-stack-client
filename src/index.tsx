import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { BrowserRouter } from 'react-router-dom';
import {Provider as ReduxProvider} from 'react-redux';
import store from './store'
import theme from './styles/theme';
import App from './app';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <ReduxProvider store={store}>
          <App />
          </ReduxProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
