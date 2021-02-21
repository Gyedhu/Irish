import firebase from "firebase/app";
import "firebase/auth";
import "firebase/app";
import { useCallback } from "react";
import useReduxMethods from "../redux/useReduxMethods";
import { useSelector } from "react-redux";
import { State } from "../redux/types";

const useFetchRecent = (): (() => void) => {
  const {
    notification,
    loadingNotification,
    storeRecentList,
  } = useReduxMethods();

  const { recentList } = useSelector<State, State>((state) => state);

  const fetchRecent = useCallback(async () => {
    const { currentUser } = firebase.auth();
    if (currentUser && !recentList) {
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
  }, [notification, loadingNotification, storeRecentList, recentList]);

  return fetchRecent;
};

export default useFetchRecent;
