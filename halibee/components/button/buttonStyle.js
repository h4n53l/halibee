import styled from 'styled-components';

export const StyledButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 50%;
  height: 2rem;
  border: none;
  color: ${props => props.theme.secondary};
  border-radius: 2rem;
  cursor: pointer;
`;