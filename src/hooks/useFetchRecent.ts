import { useCallback } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/app";
import useReduxMethods from "../redux/useReduxMethods";

const useFetchRecent = (): (() => void) => {
  const {
    notification,
    loadingNotification,
    storeRecentList,
  } = useReduxMethods();

  const fetchRecent = useCallback(async () => {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      loadingNotification();
      const data = await firebase
        .database()
        .ref(`/${currentUser.uid}/urls`)
        .get();

      if (data.exists()) {
        const list = data.val();
        const newList: Array<[string, string]> = [];
        for (const item in list) {
          newList.unshift(list[item]);
        }
        storeRecentList(newList);
        notification("Loading compleated");
      } else notification("No data available");
    }
  }, [notification, loadingNotification, storeRecentList]);

  return fetchRecent;
};

export default useFetchRecent;
