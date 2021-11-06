/** @format */

import React from 'react';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import { auth, provider } from '../firebase';

//CSS
import { BubbleChart } from '@mui/icons-material';
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
        console.log(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <BubbleChart className="login__logo--icon" />
          <span className="login__logo--title">Babble Babble</span>
        </div>
        <button className="login__btn" onClick={signIn}>
          Sign In with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
