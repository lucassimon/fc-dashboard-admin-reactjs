import React from "react";
import { Switch, Route } from 'react-router-dom';
import { Error404 } from '../Error404';
import { SignIn } from '../SignIn';
import { SignUp } from '../SignUp';
import { Dashboard } from '../Dashboard';


export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="*" component={Error404} />
    </Switch>

  );
}
