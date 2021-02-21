import React from "react";
import { useSelector } from "react-redux";
import { Line, View } from "../components";
import { State } from "../redux/types";

const Dashboard: React.FC = () => {
  const { url, count } = useSelector<State, State>((state) => state);

  if (count >= 0)
    return (
      <View align='center' direction='column'>
        <Line>{`'${url}'`} contains</Line>
        <Line size='big'>{count}</Line>
        <Line>Words</Line>
      </View>
    );

  return null;
};

export default Dashboard;
