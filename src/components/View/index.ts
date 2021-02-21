import styled, { css } from "styled-components";

interface Props {
  align?: "center" | "flex-end";
  bound?: "700px" | "400px";
  direction?: "row" | "column";
  gap?: boolean;
  justify?: "center" | "flex-end" | "space-between";
  pad?: boolean;
  popupStatus?: "popup" | "error";
  recentBarStatus?: boolean;
}

const FlexView = styled.div<Props>`
  align-items: ${(props) => props.align};
  display: flex;
  flex-basis: ${(props) => props.bound};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  flex-wrap: wrap;
  gap: ${(props) => (props.gap ? "10px" : "5px")};
  justify-content: ${(props) => props.justify};
  padding: ${(props) => props.pad && "50px 10px"};
  transition: 0.5s;
  width: 100%;

  ${(props) =>
    props.popupStatus &&
    css`
      background-color: ${props.popupStatus === "error" ? "red" : "green"};
      color: white;
      padding: 10px;
    `}

  ${(props) =>
    props.recentBarStatus !== undefined &&
    css`
      background-color: white;
      bottom: 0;
      border-radius: 5px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
      flex-wrap: nowrap;
      height: 75%;
      left: 50%;
      max-height: 75%;
      overflow: auto;
      padding: 0 10px;
      position: fixed;
      transform: translate(-50%, ${props.recentBarStatus ? 0 : 100}%);
      width: 700px;

      & > div {
        padding: 10px;
        word-break: break-all;
      }

      & > div:first-child {
        background-color: white;
        border-radius: 0;
        border-bottom: 1px solid #ccc;
        padding: 20px 10px;
        position: sticky;
        top: 0;
      }

      @media (max-width: 700px) {
        width: 100vw;
      }
    `}
`;

export default FlexView;
