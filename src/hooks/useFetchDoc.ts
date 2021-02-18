import { useCallback } from "react";
import useReduxMethods from "../redux/useReduxMethods";
import { getLength } from "../utilities";

const useFetchDoc = (): ((url: string) => void) => {
  const {
    readUrl,
    setLoadingActive,
    setLoadingDeactive,
    storeCount,
    raiseError,
  } = useReduxMethods();

  const fetchDoc = useCallback(
    async (url: string) => {
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
          if (response.status === 400) {
            raiseError("Please double check you url");
          } else {
            const doc = await response.json();

            const length = getLength(doc.html);
            storeCount(length);
          }
          setLoadingDeactive();
        } catch (error) {
          if (error.message === "Failed to construct 'URL': Invalid URL") {
            const newUrl = `https://${url}`;
            fetchDoc(newUrl);
            readUrl(newUrl);
          } else {
            raiseError(error.message);
          }
        }
      } else {
        raiseError("Write Something");
      }
    },
    [setLoadingActive, setLoadingDeactive, storeCount, raiseError, readUrl]
  );

  return fetchDoc;
};

export default useFetchDoc;
