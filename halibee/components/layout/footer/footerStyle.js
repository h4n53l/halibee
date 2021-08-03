import styled from 'styled-components';

export const FooterSection = styled.div`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  height: auto;
  width: 100%;
  overflow: hidden;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
`;