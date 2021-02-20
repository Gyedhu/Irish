import styled from "styled-components";

interface Props {
  stretch?: boolean;
}

const Button = styled.button<Props>`
  background-color: #273036;
  border: 2px solid #ddd;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  outline: 0;
  padding: 5px 10px;
  transition: 0.2s;
  width: ${(props) => (props.stretch ? "100%" : "fit-content")};

  &:active {
    opacity: 0.25;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export default Button;
