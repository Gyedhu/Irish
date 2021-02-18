import styled from "styled-components";

const ErrorMessage = styled.div<{ active: boolean }>`
  align-items: center;
  background-color: #f00;
  color: white;
  display: flex;
  font-size: 18px;
  gap: 10px;
  justify-content: center;
  padding: 10px;
  position: fixed;
  text-align: center;
  top: 0;
  transition: 0.1s;
  transform: translateY(${(props) => (props.active ? "0%" : "-100%")});
  width: 100%;
`;

export default ErrorMessage;
