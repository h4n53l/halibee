import styled from 'styled-components';
import {IoSearchCircleOutline} from 'react-icons/io5'
import {CgProfile} from 'react-icons/cg'
import {FiMail} from 'react-icons/fi'

export const Nav = styled.nav`
  padding: 0.5rem 1rem;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center ;
  flex-wrap: wrap;
  background: ${props => props.theme.primary};
  position: relative;
  width: 100%;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center ;
  position: relative;
  @media (max-width: 500px) {
    align-items: center;
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  overflow: visible;
`;

export const NavLink = styled.a`
  padding: .5rem .5rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${props => props.theme.secondary};
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  font-weight: bolder;
  &:hover {
    color: ${props => props.theme.tetiary};
  }
`;

export const SearchBox = styled.div`
  position: relative;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  
  padding: 2rem;
  height: 20px;
  border-radius: 5rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  width: ${props => (props.barOpened ? "20rem" : "2rem")};
  @media (max-width: 490px) {
    width: ${props => (props.barOpened ? "10rem" : "2rem")};
  }
  cursor: ${props => (props.barOpened ? "auto" : "pointer")};
  }
`;

export const SearchInput = styled.input`
  font-size: 14px;
  background-color: ${props => props.theme.secondary};
  width: 100%;
  margin-left: ${props => (props.barOpened ? "1rem" : "0")};
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

export const NavButton = styled.button`
  color: ${props => props.theme.secondary};
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bolder;
`;

export const SearchButton = styled.button`
  line-height: 10px;
  pointer-events: ${props => (props.barOpened ? "auto" : "none")};
  cursor: ${props => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
`;

export const SearchIcon = styled(IoSearchCircleOutline)`
  font-size: 2.5rem;
  color: ${props => props.theme.secondary};
`;

export const ProfileIcon = styled(CgProfile, FiMail)`
  font-size: 2rem;
  color: ${props => props.theme.secondary};
  &:hover {
    color: ${props => props.theme.tetiary};
  }
`;

export const MessageIcon = styled(FiMail)`
  font-size: 2rem;
  color: ${props => props.theme.secondary};
  &:hover {
    color: ${props => props.theme.tetiary};
  }
`;

export const NavLogo = styled.a`
  padding: 1rem 0;
  color: ${props => props.theme.secondary};
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
  @media (max-width: 480px) {
      font-size: 1.3rem;
  }
  span {
    font-weight: 200;
    font-size: 1rem;
  }
`;

export const NavbarDropdownContent = styled.div`
display: none;
position: absolute;
left: -60px;
background-color: ${props => props.theme.primary};
min-width: 160px;
z-index: 99;
`;

export const NavbarDropdown = styled.div`
position: relative;
display: inline-block;
color: transparent;
background: transparent;

&:hover ${NavbarDropdownContent}{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;


