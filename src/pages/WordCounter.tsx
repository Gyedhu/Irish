import React from "react";
import { View, Button } from "../components";
import { Dashboard, Title, URLForm } from "../containers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faHistory } from "@fortawesome/free-solid-svg-icons";

const WordCounter: React.FC = () => {
  return (
    <View justify='center' pad>
      <View direction='column' justify='center' bound='700px'>
        <Title />
        <br />
        <URLForm />
        <br />
        <Dashboard />
        <View gap justify='center' pad>
          <Button link>
            <FontAwesomeIcon icon={faHistory} />
            History
          </Button>
          &nbsp;&nbsp;
          <Button link>
            <FontAwesomeIcon icon={faSignOutAlt} />
            Signout
          </Button>
        </View>
      </View>
    </View>
  );
};

export default WordCounter;
