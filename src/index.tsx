import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { StoreProvider } from "./stores/Context";
import { RootStore } from "./stores/RootStore";

const rootStore = new RootStore();

ReactDOM.render(
  <StrictMode>
    <StoreProvider value={rootStore}>
      <App />
    </StoreProvider>
  </StrictMode>,
  document.getElementById("root")
);
