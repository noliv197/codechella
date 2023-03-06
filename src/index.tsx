import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './theme/GlobalStyle';
import GlobalVariables from './theme/GlobalVariables';
import { summer,boreal } from './theme/theme';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={summer}>
      <GlobalVariables/>
      <GlobalStyle/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

