import firebase from "firebase/app";
import "firebase/auth";
import { useCallback } from "react";
import useReduxMethods from "../redux/useReduxMethods";
import useRouterMethods from "./useRouterMethods";

interface UserData {
  email: string;
  password: string;
}

const useSignup = (): ((userdata: UserData) => void) => {
  const {
    notification,
    loadingNotification,
    errorNotification,
  } = useReduxMethods();

  const { gotoWordCouter } = useRouterMethods();

  const signup = useCallback(
    async ({ email, password }: UserData) => {
      try {
        loadingNotification();
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        notification("Account created successfully");
        gotoWordCouter();
      } catch (error) {
        errorNotification(error.message);
      }
    },
    [notification, loadingNotification, errorNotification, gotoWordCouter]
  );

  return signup;
};

export default useSignup;
