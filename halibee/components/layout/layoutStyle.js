import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  flex-wrap: wrap;
  background: ${props => props.theme.background};
  height: 100%;
  width: 100%;
`;