import React from "react";
import { useSelector } from "react-redux";
import { Dashboard, ErrorMessage, Form, Title, View } from "./components";
import { State } from "./redux/types";

const App: React.FC = () => {
  const { error } = useSelector<State, State>((state) => state);

  return (
    <View>
      <ErrorMessage active={Boolean(error)}>{error}</ErrorMessage>
      <Title />
      <Form />
      <Dashboard />
    </View>
  );
};

export default App;
