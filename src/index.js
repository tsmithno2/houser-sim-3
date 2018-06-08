import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { unregister } from "./registerServiceWorker";
import { HashRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./dux/store";

ReactDOM.render(
  //   <Provider store={store}>
  <HashRouter>
    <App />
  </HashRouter>,
  //   </Provider> dont forget to remove the comma from after hashrouter. will be replaced when we uncomment the provider lines,
  document.getElementById("root")
);
unregister();
