import React from "react";
import { Notification } from "./containers";
import { WordCounter } from "./pages";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Notification />
      <WordCounter />
    </React.Fragment>
  );
};

export default App;
