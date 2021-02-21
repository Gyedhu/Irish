import React from "react";
import { Button, Input, View } from "../components";
import { Logo } from "../containers";
import { useForm } from "react-hook-form";
import { useRouterMethods, useSignup } from "../hooks";

interface UserData {
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const { register, handleSubmit } = useForm<UserData>();
  const { gotoSignin } = useRouterMethods();
  const signup = useSignup();

  const submit = (userdata: UserData) => {
    signup(userdata);
  };

  return (
    <React.Fragment>
      <Logo title='Create new account' />
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
      <Button onClick={gotoSignin} link>
        Signin to your account?
      </Button>
    </React.Fragment>
  );
};

export default Signup;
