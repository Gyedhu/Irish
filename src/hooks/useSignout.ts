import firebase from "firebase/app";
import "firebase/auth";
import { useRouterMethods } from ".";
import { useCallback } from "react";

const useSignout = (): (() => void) => {
  const { gotoSignin } = useRouterMethods();

  const signout = useCallback(async () => {
    await firebase.auth().signOut();
    gotoSignin();
  }, [gotoSignin]);

  return signout;
};

export default useSignout;
