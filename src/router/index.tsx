import React from "react";
import { Switch, Route } from "react-router-dom";
import { Authentication, WordCounter } from "../pages";

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Authentication type='signin' />
      </Route>

      <Route path='/signup'>
        <Authentication type='signup' />
      </Route>

      <Route path='/word-couter'>
        <WordCounter />
      </Route>
    </Switch>
  );
};

export default Router;
