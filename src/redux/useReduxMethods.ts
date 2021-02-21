import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setCount, setNotification, setUrl, setRecentState } from "./actions";

interface ReturnType {
  readUrl: (url: string) => void;
  storeCount: (count: number) => void;
  popNotification: () => void;
  notification: (message: string) => void;
  loadingNotification: () => void;
  errorNotification: (message: string) => void;
  changeRecentState: (status: boolean) => void;
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
      dispatch(setRecentState(status));
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
  };
};

export default useReduxMethods;
