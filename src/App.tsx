import React from "react";
import { Notification } from "./containers";
import Router from "./router";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Notification />
      <Router />
    </React.Fragment>
  );
};

export default App;
