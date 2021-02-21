import React from "react";
import { Line, View } from "../components";
import { Logo } from ".";

const Title: React.FC = () => {
  return (
    <View align='center' direction='column'>
      <Logo />
      <Line center className='title' size='big'>
        Webpage Word Counter
      </Line>
      <Line>Type your url down below</Line>
    </View>
  );
};

export default Title;
