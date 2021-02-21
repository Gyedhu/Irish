import React from "react";
import { Line, View } from "../components";
import { useSelector } from "react-redux";
import { State } from "../redux/types";

interface Props {
  children?: React.ReactNode;
}

const Recent: React.FC<Props> = ({ children }: Props) => {
  const { recent } = useSelector<State, State>((state) => state);

  return (
    <View>
      <Line asTitle size='medium'>
        History
      </Line>
      {children}
    </View>
  );
};

export default Recent;
