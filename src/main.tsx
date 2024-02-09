import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import initMockAPI from './mocks/initMockAPI.ts';
import { AxiosProvider } from './axios/axiosContext.tsx';
import App from './App.tsx';

import GlobalFont from './assets/styles/GlobalFont.tsx';
import GlobalStyle from './assets/styles/GlobalStyle.tsx';

initMockAPI();

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <AxiosProvider>
        <GlobalFont />
        <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AxiosProvider>
    </React.StrictMode>,
  );
}
