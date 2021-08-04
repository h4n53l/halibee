import Button from "../button/button";
import Input from "../input/input";
import {
  ButtonContainer,
  ForgotPassword,
  HorizontalRule,
  IconsContainer,
  InputContainer,
  LoginWith,
  MainContainer,
  WelcomeText,
  Wrapper,
} from "./loginStyles";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Icon from "../icon";

const LoginComponent = () => {
  return (
      <Wrapper>
    <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button content="Sign Up" />
      </ButtonContainer>
      <HorizontalRule />
      <ForgotPassword>Forgot Password ?</ForgotPassword>
    </MainContainer>
    </Wrapper>
  );
};
export default LoginComponent;
