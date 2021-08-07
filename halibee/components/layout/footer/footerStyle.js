import styled from 'styled-components';

export const FooterSection = styled.div`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  height: auto;
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  bottom: 0;
`;