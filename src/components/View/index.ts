import styled, { css } from "styled-components";

interface Props {
  active?: boolean;
  error?: boolean;
  type?: "full-size" | "vertical" | "notification";
}

export const ViewContainer = styled.div<Props>`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 5px;

  ${({ type }) =>
    type === "vertical" &&
    css`
      flex-direction: row;
      flex-wrap: wrap;
      gap: 10px;
      max-width: 700px;
      width: 100%;
    `}

  ${({ type }) =>
    type === "full-size" &&
    css`
      gap: 50px;
      height: 100vh;
      padding: 60px 10px;
      width: 100%;
    `}

  ${({ active, error, type }) =>
    type === "notification" &&
    css`
      background-color: ${error ? "red" : "green"};
      color: white;
      padding: 10px;
      position: fixed;
      text-align: center;
      top: 0;
      transition: 0.1s;
      transform: translateY(${active ? 0 : -100}%);
      width: 100%;
    `}
`;

export default ViewContainer;
