import styled from 'styled-components';

export const FooterSection = styled.div`
  display: flex;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  height: auto;
  width: 100%;
  overflow: hidden;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 0px;
`;