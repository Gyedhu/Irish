import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../redux/types";
import {
  CountText,
  DashaboardContainer,
  DashboardText,
  Spinner,
} from "./style";

const Dashboard: React.FC = () => {
  const { url, loading, count } = useSelector<State, State>((state) => state);

  if (loading) {
    return (
      <DashaboardContainer>
        <Spinner>
          <FontAwesomeIcon icon={faSpinner} />
        </Spinner>
      </DashaboardContainer>
    );
  }

  if (count >= 0)
    return (
      <DashaboardContainer>
        <DashboardText>{`'${url}'`} contains</DashboardText>
        <CountText>{count}</CountText>
        <DashboardText>Words</DashboardText>
      </DashaboardContainer>
    );

  return null;
};

export default Dashboard;
