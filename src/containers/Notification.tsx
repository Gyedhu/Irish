import React from "react";
import { useSelector } from "react-redux";
import { View } from "../components";
import { State } from "../redux/types";

const Notification: React.FC = () => {
  const { notification } = useSelector<State, State>((state) => state);

  return (
    <View
      type='notification'
      error={notification ? notification.type === "error" : false}
      active={notification !== null}
    >
      {notification && notification.message}
    </View>
  );
};

export default Notification;
