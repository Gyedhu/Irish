import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;

const InputButtonStyles = `
  border-radius: 5px;
  font-size: 20px;
  padding: 5px 10px;

  &:focus {
    outline: 1px dashed dodgerblue;
  }
`;

export const Input = styled.input`
  border: 2px solid #ddd;
  flex: 1;
  ${InputButtonStyles};
`;

export const Button = styled.button`
  background-color: #273036;
  border: 2px solid #ddd;
  color: #fff;
  cursor: pointer;
  transition: 0.5s;
  width: fit-content;
  ${InputButtonStyles};

  &:active {
    opacity: 0.2;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
