import styled, { css } from "styled-components";

type FontSize = "small" | "regular" | "medium" | "big";

const fontSize = {
  small: "12px",
  medium: "20px",
  regular: "18px",
  big: "40px",
};

interface Props {
  center?: boolean;
  fancy?: boolean;
  size?: FontSize;
  asTitle?: boolean;
}

const Line = styled.p<Props>`
  ${({ center, fancy, size, asTitle }) =>
    css`
      ${asTitle &&
      css`
        background-color: white;
        border-bottom: 1px solid #ddd;
        padding: 10px;
        position: sticky;
        top: 0;
        width: 100%;
      `};
      ${fancy && "font-family: Potta One"};
      font-size: ${size ? fontSize[size] : fontSize["regular"]};
      text-align: ${center && "center"};
    `};
`;

export default Line;
