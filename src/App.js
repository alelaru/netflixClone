
import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import * as ROUTES from "./constants/routes"
import {IsUserRedirect, ProtectedRoutes} from './helpers/routes';
import {Home, Browse, Signin, Signup} from './pages';

export default function App() {
  const user = { name: "carl"};
  return (
    <Router>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGNIN}>
        <Signin/>
      </IsUserRedirect>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGNUP}>
        <Signup/>
      </IsUserRedirect>
      <ProtectedRoutes user={user} path={ROUTES.BROWSE}>
        <Browse/>
      </ProtectedRoutes>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
        <Home/>
      </IsUserRedirect>
    </Router>
  );
}
