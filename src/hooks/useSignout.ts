import firebase from "firebase/app";
import "firebase/auth";
import { useRouterMethods } from ".";
import { useCallback } from "react";
import useReduxMethods from "../redux/useReduxMethods";

const useSignout = (): (() => void) => {
  const { notification, loadingNotification } = useReduxMethods();
  const { gotoSignin } = useRouterMethods();

  const signout = useCallback(async () => {
    loadingNotification();
    await firebase.auth().signOut();
    gotoSignin();
    notification("See you again");
  }, [gotoSignin, notification, loadingNotification]);

  return signout;
};

export default useSignout;
