import styled, { keyframes } from "styled-components";

export const DashaboardContainer = styled.div`
  color: #273036;
  text-align: center;
`;

export const DashboardText = styled.p`
  font-size: 20px;
`;

export const CountText = styled.p`
  font-size: 50px;
`;

const spinning = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${spinning} 1s infinite;
  color: #273036;
  font-size: 30px;
  padding: 10px 0;
`;
