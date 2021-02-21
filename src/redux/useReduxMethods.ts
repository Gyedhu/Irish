import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  setCount,
  setNotification,
  setUrl,
  setRecentVisibility,
  setRecentList,
  pushToRecentList,
} from "./actions";
import { PushToREcentList, SetRecentList } from "./types";

interface ReturnType {
  readUrl: (url: string) => void;
  storeCount: (count: number) => void;
  popNotification: () => void;
  notification: (message: string) => void;
  loadingNotification: () => void;
  errorNotification: (message: string) => void;
  changeRecentState: (status: boolean) => void;
  storeRecentList: (list: SetRecentList["payload"]) => void;
  addToRecentList: (newItem: PushToREcentList["payload"]) => void;
}

const useReduxMethods = (): ReturnType => {
  const dispatch = useDispatch();

  const readUrl = useCallback(
    (url: string) => {
      dispatch(setUrl(url));
    },
    [dispatch]
  );

  const storeCount = useCallback(
    (count: number) => {
      dispatch(setCount(count));
    },
    [dispatch]
  );

  const popNotification = useCallback(() => {
    dispatch(setNotification(null));
  }, [dispatch]);

  const notification = useCallback(
    (message: string) => {
      dispatch(
        setNotification({
          message,
          type: "popup",
        })
      );

      setTimeout(() => {
        dispatch(setNotification(null));
      }, 2000);
    },
    [dispatch]
  );

  const loadingNotification = useCallback(() => {
    dispatch(
      setNotification({
        message: "Please wait",
        type: "popup",
      })
    );
  }, [dispatch]);

  const errorNotification = useCallback(
    (message: string) => {
      dispatch(
        setNotification({
          message,
          type: "error",
        })
      );

      setTimeout(() => {
        dispatch(setNotification(null));
      }, 2000);
    },
    [dispatch]
  );

  const changeRecentState = useCallback(
    (status: boolean) => {
      dispatch(setRecentVisibility(status));
    },
    [dispatch]
  );

  const storeRecentList = useCallback(
    (list: SetRecentList["payload"]) => {
      dispatch(setRecentList(list));
    },
    [dispatch]
  );

  const addToRecentList = useCallback(
    (newItem: PushToREcentList["payload"]) => {
      dispatch(pushToRecentList(newItem));
    },
    [dispatch]
  );

  return {
    readUrl,
    storeCount,
    popNotification,
    notification,
    loadingNotification,
    errorNotification,
    changeRecentState,
    storeRecentList,
    addToRecentList,
  };
};

export default useReduxMethods;
