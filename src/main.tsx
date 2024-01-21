import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import enableMocking from "./mocks/enableMocking.ts";
import App from "./App.tsx";
import GlobalFont from "./assets/style/GlobalFont.tsx";
import GlobalStyle from "./assets/style/GlobalStyle.tsx";

enableMocking();

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <GlobalFont />
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
}
