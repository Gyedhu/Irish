import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { useCallback } from "react";
import useReduxMethods from "../redux/useReduxMethods";

const usePushToHistory = (): ((url: string) => void) => {
  const { errorNotification } = useReduxMethods();

  const pushToHistory = useCallback(
    async (url: string) => {
      const { currentUser } = firebase.auth();

      if (currentUser) {
        if (currentUser.email) {
          try {
            const newUrl = await firebase
              .database()
              .ref(`/${currentUser.uid}/urls`)
              .push();
            await newUrl.set([url, new Date().toLocaleString()]);
          } catch (error) {
            errorNotification(error.message);
          }
        }
      }
    },
    [errorNotification]
  );

  return pushToHistory;
};

export default usePushToHistory;
