import React from "react";
import { View } from "../components";
import { Dashboard, Title, URLForm } from "../containers";

const WordCounter: React.FC = () => {
  return (
    <View type='full-size'>
      <Title />
      <URLForm />
      <Dashboard />
    </View>
  );
};

export default WordCounter;
