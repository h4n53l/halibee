import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import { Link as LinkRouter} from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll';

export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: linear-gradient( #FFE2A2, #daa520);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SideBarWrapper = styled.div`
  color: #fff;
`;

export const SideBarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 60px);
}
`;

export const SideBarLink = styled(LinkRouter)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
      color: #fff;
      transition: 0.2s ease-ease-in-out;
  }
`;

export const SideBarLinkScroll = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
      color: #fff;
      transition: 0.2s ease-ease-in-out;
  }
`;