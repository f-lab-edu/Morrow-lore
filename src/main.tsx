import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import initMockAPI from './mocks/initMockAPI';
import App from './App';

import GlobalFont from './assets/styles/GlobalFont';
import GlobalStyle from './assets/styles/GlobalStyle';

const queryClient = new QueryClient();
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  initMockAPI().then(() => {
    root.render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <GlobalFont />
          <GlobalStyle />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </React.StrictMode>,
    );
  });
}
