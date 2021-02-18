import React from "react";
import { Button, FormContainer, Input } from "./style";
import { useSelector } from "react-redux";
import { useFetchDoc } from "../../hooks";
import { State } from "../../redux/types";
import useReduxMethods from "../../redux/useReduxMethods";

const Form: React.FC = () => {
  const { readUrl } = useReduxMethods();
  const fetchDoc = useFetchDoc();

  const { url } = useSelector<State, State>((state) => state);

  const _readUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    readUrl(event.currentTarget.value);
  };

  return (
    <FormContainer>
      <Input
        className='input'
        onChange={_readUrl}
        placeholder='Type here'
        type='text'
        value={url}
      />
      <Button className='submitButton' onClick={fetchDoc}>
        Submit
      </Button>
    </FormContainer>
  );
};

export default Form;
