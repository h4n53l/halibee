import { Auth } from "aws-amplify";
import {useRouter} from "next/router";
import { useEffect, useState } from "react";
import LoginComponent from "../components/login/login";


const Login = () => {
 const router = useRouter()

  useEffect(() => {
    CheckLoggedInState();
  }, []);

  const CheckLoggedInState = () => {
    Auth.currentAuthenticatedUser()
      .then(() => {
        router.push('/')
      })
      .catch(() => {
        console.log;
      });
  };

    return (
      <LoginComponent />
    )
  }

export default Login;