import React from "react";
import { useSelector } from "react-redux";
import { Button, Input, View } from "../components";
import { useFetchDoc } from "../hooks";
import { State } from "../redux/types";
import useReduxMethods from "../redux/useReduxMethods";

const URLForm: React.FC = () => {
  const { readUrl, changeRecentState } = useReduxMethods();
  const fetchDoc = useFetchDoc();

  const { url, recentVisibility } = useSelector<State, State>((state) => state);

  const _readUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    readUrl(event.currentTarget.value);
  };

  const toggleRecent = () => {
    changeRecentState(!recentVisibility);
  };

  const submit = () => {
    fetchDoc(url);
  };

  return (
    <View gap>
      <Input
        className='input'
        onChange={_readUrl}
        fitInFlex
        placeholder='Type here'
        type='text'
        value={url}
      />
      <Button className='submitButton' filled fitInMobile onClick={submit}>
        Submit
      </Button>
    </View>
  );
};

export default URLForm;
