import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";

import App from "./App";
import { StoreProvider } from "./stores/Context";
import { RootStore } from "./stores/RootStore";

const rootStore = new RootStore();

ReactDOM.render(
  <StrictMode>
    <RecoilRoot>
      <StoreProvider value={rootStore}>
        <App />
      </StoreProvider>
    </RecoilRoot>
  </StrictMode>,
  document.getElementById("root")
);
