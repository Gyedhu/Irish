import { useCallback } from "react";
import { useSelector } from "react-redux";
import { State } from "../redux/types";
import useReduxMethods from "../redux/useReduxMethods";
import { getLength } from "../utilities";

const useFetchDoc = (): (() => void) => {
  const { url } = useSelector<State, State>((state) => state);
  const {
    setLoadingActive,
    setLoadingDeactive,
    storeCount,
    raiseError,
  } = useReduxMethods();

  const fetchDoc = useCallback(async () => {
    if (url) {
      setLoadingActive();

      try {
        new URL(url);

        const response = await fetch(
          "https://lit-ocean-53181.herokuapp.com/get-file",
          {
            method: "POST",
            headers: {
              "Content-Type": "Application/json",
            },
            body: JSON.stringify({ url }),
          }
        );

        const doc = await response.json();

        const length = getLength(doc.html);
        storeCount(length);
      } catch (error) {
        if (error.message === "Failed to construct 'URL': Invalid URL")
          raiseError("Enter a valid url");
        else {
          raiseError("Something went wrong!");
        }
      }

      setLoadingDeactive();
    } else {
      raiseError("Write Something");
    }
  }, [setLoadingActive, setLoadingDeactive, url, storeCount, raiseError]);

  return fetchDoc;
};

export default useFetchDoc;
