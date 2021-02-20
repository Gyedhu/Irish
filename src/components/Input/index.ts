import styled from "styled-components";

interface Props {
  fitInFlex?: boolean;
  fullWidth?: boolean;
}

const Input = styled.input<Props>`
  background-color: transparent;
  border: 1px solid #bbb;
  border-radius: 5px;
  color: #273630;
  flex-grow: ${(props) => props.fitInFlex && 1};
  outline: 0;
  padding: 5px 10px;
  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};
`;

export default Input;
