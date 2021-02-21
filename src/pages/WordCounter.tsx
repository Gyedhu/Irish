import React from "react";
import { View, Button } from "../components";
import { Dashboard, Recent, Title, URLForm } from "../containers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faHistory } from "@fortawesome/free-solid-svg-icons";
import { useFetchRecent, useSignout } from "../hooks";
import { useSelector } from "react-redux";
import { State } from "../redux/types";
import useReduxMethods from "../redux/useReduxMethods";

const WordCounter: React.FC = () => {
  const signout = useSignout();
  const { changeRecentState } = useReduxMethods();
  const fetchRecent = useFetchRecent();

  const toggleRecentVisibility = () => {
    changeRecentState(!recentVisibility);
    if (!recentVisibility) fetchRecent();
  };

  const { recentVisibility } = useSelector<State, State>((state) => state);

  return (
    <View justify='center' pad>
      <View direction='column' justify='center' bound='700px'>
        <Title />
        <br />
        <URLForm />
        <br />
        <Dashboard />

        <View justify='center' pad>
          <Button link onClick={toggleRecentVisibility}>
            <FontAwesomeIcon icon={faHistory} size='xs' />
            History
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button link onClick={signout}>
            <FontAwesomeIcon icon={faSignOutAlt} size='xs' />
            Signout
          </Button>
        </View>
      </View>

      <Recent />
    </View>
  );
};

export default WordCounter;
