import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setCount, setLoading, setUrl } from "./actions";

interface ReturnType {
  readUrl: (url: string) => void;
  setLoadingActive: () => void;
  setLoadingDeactive: () => void;
  storeCount: (count: number) => void;
}

const useReduxMethods = (): ReturnType => {
  const dispatch = useDispatch();

  const readUrl = useCallback(
    (url: string) => {
      dispatch(setUrl(url));
    },
    [dispatch]
  );

  const setLoadingActive = useCallback(() => {
    dispatch(setLoading(true));
  }, [dispatch]);

  const setLoadingDeactive = useCallback(() => {
    dispatch(setLoading(false));
  }, [dispatch]);

  const storeCount = useCallback(
    (count: number) => {
      dispatch(setCount(count));
    },
    [dispatch]
  );

  return { readUrl, setLoadingActive, setLoadingDeactive, storeCount };
};

export default useReduxMethods;
