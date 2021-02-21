import { useHistory } from "react-router-dom";

interface ReturnType {
  gotoSignup: () => void;
  gotoSignin: () => void;
  gotoWordCouter: () => void;
}

const useRouterMethods = (): ReturnType => {
  const router = useHistory();

  const gotoSignup = () => {
    router.push("/signup");
  };

  const gotoSignin = () => {
    router.push("/");
  };

  const gotoWordCouter = () => {
    router.push("/word-couter");
  };

  return { gotoSignup, gotoSignin, gotoWordCouter };
};

export default useRouterMethods;
