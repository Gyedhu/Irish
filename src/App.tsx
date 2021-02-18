import React from "react";
import { Dashboard, Form, Title, View } from "./components";

const App: React.FC = () => {
  return (
    <View>
      <Title />
      <Form />
      <Dashboard />
    </View>
  );
};

export default App;
