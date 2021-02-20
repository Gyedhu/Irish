import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setCount, setNotification, setUrl } from "./actions";

interface ReturnType {
  readUrl: (url: string) => void;
  storeCount: (count: number) => void;
  popNotification: () => void;
  loadingNotification: () => void;
  errorNotification: (message: string) => void;
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

  const loadingNotification = useCallback(() => {
    dispatch(
      setNotification({
        message: "Loading, please wait",
        type: "loading",
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

  return {
    readUrl,
    storeCount,
    popNotification,
    loadingNotification,
    errorNotification,
  };
};

export default useReduxMethods;
