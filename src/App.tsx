import React from "react";
import { useSelector } from "react-redux";
import {
  AuthContainer,
  Dashboard,
  ErrorMessage,
  Form,
  OverLayer,
  Title,
  View,
} from "./components";
import { State } from "./redux/types";

const App: React.FC = () => {
  const { error } = useSelector<State, State>((state) => state);

  return (
    <React.Fragment>
      <OverLayer>
        <AuthContainer></AuthContainer>
      </OverLayer>
      <View>
        <ErrorMessage active={Boolean(error)}>{error}</ErrorMessage>
        <Title />
        <Form />
        <Dashboard />
      </View>
    </React.Fragment>
  );
};

export default App;
