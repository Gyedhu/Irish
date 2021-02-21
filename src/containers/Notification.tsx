import React from "react";
import { useSelector } from "react-redux";
import { View } from "../components";
import { State } from "../redux/types";

const Notification: React.FC = () => {
  const { notification } = useSelector<State, State>((state) => state);

  return (
    <View
      justify='center'
      status={notification ? notification.type : undefined}
    >
      {notification && notification.message}
    </View>
  );
};

export default Notification;
