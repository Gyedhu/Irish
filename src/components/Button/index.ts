import styled, { css } from "styled-components";

interface Props {
  filled?: boolean;
  link?: boolean;
  stretch?: boolean;
  fitInMobile?: boolean;
}

const Button = styled.button<Props>`
  align-items: center;
  background-color: transparent;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  justify-content: center;
  outline: 0;
  padding: 10px 0;
  transition: 0.2s;
  width: ${(props) => (props.stretch ? "100%" : "fit-content")};

  ${({ filled }) =>
    filled &&
    css`
      background-color: #273036;
      color: #fff;
      padding: 5px 10px;
    `}

  ${({ link }) =>
    link &&
    css`
      color: #59886b;
      text-decoration: underline;
    `}

  &:active {
    opacity: 0.25;
  }

  ${({ fitInMobile }) =>
    fitInMobile &&
    css`
      @media (max-width: 400px) {
        width: 100%;
      }
    `}
`;

export default Button;
