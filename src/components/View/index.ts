import styled, { css } from "styled-components";

interface Props {
  align?: "center" | "flex-end";
  bound?: "700px" | "400px";
  direction?: "row" | "column";
  gap?: boolean;
  justify?: "center" | "flex-end" | "space-between";
  pad?: boolean;
  status?: "popup" | "error";
}

const FlexView = styled.div<Props>`
  align-items: ${(props) => props.align};
  /* border: 1px dashed orange; */
  display: flex;
  flex-basis: ${(props) => props.bound};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  flex-wrap: wrap;
  gap: ${(props) => (props.gap ? "10px" : "10px")};
  justify-content: ${(props) => props.justify};
  padding: ${(props) => props.pad && "50px 10px"};
  transition: 0.5s;
  width: 100%;

  ${(props) =>
    props.status &&
    css`
      background-color: ${props.status === "error" ? "red" : "green"};
      color: white;
      padding: 10px;
    `}
`;

export default FlexView;
