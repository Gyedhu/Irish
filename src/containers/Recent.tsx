import React from "react";
import { Button, Line, View } from "../components";
import { useSelector } from "react-redux";
import { State } from "../redux/types";
import { useFetchDoc, useFetchRecent } from "../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import useReduxMethods from "../redux/useReduxMethods";

const Recent: React.FC = () => {
  const { changeRecentState, readUrl } = useReduxMethods();
  const fetchRecent = useFetchRecent();
  const fetchDoc = useFetchDoc();
  const { recentVisibility, recentList } = useSelector<State, State>(
    (state) => state
  );

  const toggleRecentVisibility = () => {
    changeRecentState(!recentVisibility);
    if (!recentVisibility) fetchRecent();
  };

  const onLinkClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const url = event.currentTarget.value;
    readUrl(url);
    fetchDoc(url);
    toggleRecentVisibility();
  };

  return (
    <View direction='column' gap recentBarStatus={recentVisibility}>
      <View align='center' justify='space-between'>
        <Line>History</Line>
        <Button onClick={toggleRecentVisibility}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </Button>
      </View>

      {recentList?.map((value, index) => (
        <View direction='column' justify='space-between' key={index}>
          <Button link onClick={onLinkClick} value={value[0]}>
            <Line>{value[0]}</Line>
          </Button>
          <Line size='small'>{value[1]}</Line>
        </View>
      ))}

      <View></View>
    </View>
  );
};

export default Recent;
