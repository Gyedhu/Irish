import React from "react";
import { View } from "../components";
import { Signin, Signup } from ".";

interface Props {
  type: "signin" | "signup";
}

const Authentication: React.FC<Props> = ({ type }: Props) => {
  return (
    <View justify='center' pad>
      {type === "signin" && <Signin />}
      {type === "signup" && <Signup />}
    </View>
  );
};

export default Authentication;
