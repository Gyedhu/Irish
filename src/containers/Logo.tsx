import React from "react";
import { Line, View } from "../components";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  title?: string;
}

const Logo: React.FC<Props> = ({ title }: Props) => {
  return (
    <View align='center' direction='column'>
      <FontAwesomeIcon icon={faShieldAlt} size='3x' />
      <Line fancy size='small'>
        Irish
      </Line>
      {title && <Line fancy>{title}</Line>}
    </View>
  );
};

export default Logo;
