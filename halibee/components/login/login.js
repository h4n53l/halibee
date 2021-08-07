import {
  MainContainer,
  WelcomeText,
  Wrapper,
} from "./loginStyles";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";

const LoginComponent = () => {
  const [user, setUser] = useState(null)
  const [authState, setAuthState] = useState(null)
  useEffect(() => {
    // Access the user session on the client
    Auth.currentAuthenticatedUser()
      .then(user => {
        setUser(user)
      })
      .catch(error => setUser(null))
  }, [])
  return (
      <Wrapper>
    <MainContainer>
      
      { user && <WelcomeText>Welcome, {user.username}</WelcomeText>}
        <AmplifySignOut />
    </MainContainer>
    </Wrapper>
  );
};
export default withAuthenticator(LoginComponent);
