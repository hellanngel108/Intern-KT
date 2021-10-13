import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import { TokenProvider } from "./context/TokenContext";
// import { CurrentUserProvider } from "./context/CurrentUserContext";
// import { GroupsOfUserProvider } from "./context/GroupsOfUserContext";
import ScrollToTop from "./utils/ScrollTopAuto";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <TokenProvider> */}
      {/* <CurrentUserProvider> */}
      {/* <GroupsOfUserProvider> */}
      <ScrollToTop />
      <App />
      {/* </GroupsOfUserProvider> */}
      {/* </CurrentUserProvider> */}
      {/* </TokenProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
