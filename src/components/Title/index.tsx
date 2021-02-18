import React from "react";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LogoText, MainTitle, TitleContainer, SubTitle } from "./style";

const Title: React.FC = () => {
  return (
    <TitleContainer>
      <FontAwesomeIcon icon={faShieldAlt} size='3x' />
      <LogoText>Irish</LogoText>

      <MainTitle className='title'>Webpage Word Counter</MainTitle>
      <SubTitle>Type your url down below</SubTitle>
    </TitleContainer>
  );
};

export default Title;
