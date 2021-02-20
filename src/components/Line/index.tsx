import styled, { css } from "styled-components";

type FontSize = "small" | "regular" | "big";

const fontSize = {
  small: "12px",
  regular: "18px",
  big: "40px",
};

interface Props {
  center?: boolean;
  fancy?: boolean;
  size?: FontSize;
}

const Line = styled.p<Props>`
  ${({ center, fancy, size }) =>
    css`
      ${fancy && "font-family: Potta One"};
      font-size: ${size ? fontSize[size] : fontSize["regular"]};
      text-align: ${center && "center"};
    `};
`;

export default Line;
