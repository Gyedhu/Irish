import firebase from "firebase/app";
import "firebase/auth";
import { useCallback } from "react";
import useReduxMethods from "../redux/useReduxMethods";
import useRouterMethods from "./useRouterMethods";

interface UserData {
  email: string;
  password: string;
}

const useSignin = (): ((userdata: UserData) => void) => {
  const {
    notification,
    loadingNotification,
    errorNotification,
  } = useReduxMethods();

  const { gotoWordCouter } = useRouterMethods();

  const signin = useCallback(
    async ({ email, password }: UserData) => {
      try {
        loadingNotification();
        await firebase.auth().signInWithEmailAndPassword(email, password);
        notification(`Welcome back ${email}`);
        gotoWordCouter();
      } catch (error) {
        errorNotification(error.message);
      }
    },
    [notification, loadingNotification, errorNotification, gotoWordCouter]
  );

  return signin;
};

export default useSignin;
