import React from "react";
import { ViewContainer, ViewInnerContainer } from "./style";

interface Props {
  children: React.ReactNode;
}

const View: React.FC<Props> = ({ children }: Props) => {
  return (
    <ViewContainer>
      <ViewInnerContainer>{children}</ViewInnerContainer>
    </ViewContainer>
  );
};

export default View;
