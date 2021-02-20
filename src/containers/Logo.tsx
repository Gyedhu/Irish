import React from "react";
import { Line, View } from "../components";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Logo: React.FC = () => {
  return (
    <View>
      <FontAwesomeIcon icon={faShieldAlt} size='3x' />
      <Line fancy size='small'>
        Irish
      </Line>
    </View>
  );
};

export default Logo;
