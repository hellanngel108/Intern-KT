import React from "react";
import styles from "./styles.js";
import { Switch, Route } from "react-router-dom";

import { HomePage } from "./pages/index";

function App() {
  return (
    <div className={styles.App}>
      {/* <Switch>
        <Route exact path="/register"> */}
      <HomePage />
      {/* </Route>
      </Switch> */}
    </div>
  );
}

export default App;
