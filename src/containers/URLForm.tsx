import React from "react";
import { useSelector } from "react-redux";
import { Button, Input, View } from "../components";
import { useFetchDoc } from "../hooks";
import { State } from "../redux/types";
import useReduxMethods from "../redux/useReduxMethods";

const URLForm: React.FC = () => {
  const { readUrl } = useReduxMethods();
  const fetchDoc = useFetchDoc();

  const { url } = useSelector<State, State>((state) => state);

  const _readUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    readUrl(event.currentTarget.value);
  };

  const submit = () => {
    fetchDoc(url);
  };

  return (
    <View type='vertical'>
      <Input
        className='input'
        onChange={_readUrl}
        fitInFlex
        placeholder='Type here'
        type='text'
        value={url}
      />
      <Button className='submitButton' onClick={submit}>
        Submit
      </Button>
    </View>
  );
};

export default URLForm;
