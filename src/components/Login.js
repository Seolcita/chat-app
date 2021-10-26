/** @format */

import React from 'react';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import { auth, provider } from '../firebase';

//CSS
import { Button } from '@mui/material';
import { FiberManualRecord } from '@mui/icons-material';
import './Login.scss';

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://toppng.com/uploads/preview/slack-new-logo-icon-11609376883z32jbkf8kg.png"
          alt="slack logo"
        />
        <h1>Sign in to Slack</h1>
        <Button className="login__btn" onClick={signIn}>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
