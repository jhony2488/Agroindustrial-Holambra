import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import { ThemeProvider } from '@mui/material';
import { DefaultTheme } from './theme/Default';
import { GlobalStyle } from './globalStyle';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={DefaultTheme}>
        <Routes />
    </ThemeProvider>
  </React.StrictMode>,
);
