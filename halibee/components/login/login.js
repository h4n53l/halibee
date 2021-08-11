import { useState } from "react";
import { Auth } from "aws-amplify";
import {
  ButtonContainer,
  ForgotPassword,
  HorizontalRule,
  LoginWith,
  MainContainer,
  Subtext,
  WelcomeText,
  Wrapper,
} from "./loginStyles";
import Button from "../button/button";
import Input from "../input/input";
import { useRouter } from "next/router";

const LoginComponent = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [loggedIn, setLoggedIn] = useState(null);
  const router = useRouter();

  const signIn = async (event) => {
    event.preventDefault();
    try {
      const user = await Auth.signIn(username, password);
      setLoggedIn(user);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  if (loggedIn) {
    router.push("/");
  }

  return (
    <Wrapper>
      <MainContainer>
        <WelcomeText>Welcome</WelcomeText>
        <Subtext>Please login</Subtext>

        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(valueEntered) => setUsername(valueEntered.target.value)}
        />
        <br></br>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(valueEntered) => setPassword(valueEntered.target.value)}
        />

        <ButtonContainer>
          <Button content="Login" onClick={signIn} />
        </ButtonContainer>
        <LoginWith>New Here?</LoginWith>
        <ButtonContainer>
          <Button content="Register" />
        </ButtonContainer>
        <HorizontalRule />
        <ForgotPassword>Forgot Password?</ForgotPassword>
      </MainContainer>
    </Wrapper>
  );
};
export default LoginComponent;

