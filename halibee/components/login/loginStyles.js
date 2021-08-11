import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
  margin: 50px;
  height: auto;
  width: 30vw;
  background: ${props => props.theme.tetiary};
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 20px;
  color: ${props => props.theme.secondary};
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }

`;

export const WelcomeText = styled.h2`
  margin: 2rem 0 2rem 0;
  color: ${props => props.theme.secondary};
`;

export const Subtext = styled.h5`
  color: ${props => props.theme.secondary};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin: 1rem 0 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginWith = styled.h5`
  cursor: pointer;
`;

export const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background-color: ${props => props.theme.primary};
  margin: 1rem 0 1rem 0;
`;


export const ForgotPassword = styled.h4`
  cursor: pointer;
  color: ${props => props.theme.secondary};
`;