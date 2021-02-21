import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input, View } from "../components";
import { Logo } from "../containers";
import { useRouterMethods, useSignin } from "../hooks";

interface UserData {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const { register, handleSubmit } = useForm<UserData>();
  const { gotoSignup } = useRouterMethods();
  const signin = useSignin();

  const submit = (userdata: UserData) => {
    signin(userdata);
  };

  return (
    <View align='center' bound='400px' direction='column'>
      <Logo title='Welcome back' />
      <br />

      <Input
        fullWidth
        name='email'
        placeholder='Email'
        ref={register({ required: true })}
        type='email'
      />
      <Input
        fullWidth
        name='password'
        placeholder='Password'
        ref={register({ required: true })}
        type='password'
      />

      <Button filled onClick={handleSubmit(submit)} stretch>
        Submit
      </Button>
      <Button onClick={gotoSignup} link>
        Create a new account?
      </Button>
    </View>
  );
};

export default Signin;
