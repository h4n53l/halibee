
import { FaSearch, FaTimes } from 'react-icons/fa';
import {  Link as LinkRouter } from 'react-router-dom';
import {  Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';

export const Logo = styled.img`
position: relative;
  width: 3em;
  height: 2em;
  margin: 6px;
  border-radius: 5px;
`;

export const Nav = styled.nav`
  background: linear-gradient( #FFE2A2, #daa520);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;

  @media screen and (max-width: 960px) {
      transition: 0.8s all ease;
  }

  @media screen and (max-width: 1040px) {
    height: 100px;
    float: none;
  }

  @media screen and (max-width: 580px) {
    height: 160px;
    float: none;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  
  @media screen and (max-width: 580px) {
    position: fixed;
    left: 5px;
    top: 5px;
    float: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 900px) {
      display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkRouter)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const NavScrollLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const SearchBar = styled.input`
  position: relative;
  border-radius: 10px;
  border: .5px solid #daa520;
  height: 30px;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 1px;

  @media screen and (max-width: 580px) {
      width: 70%;
      top: 10px;
  }
`;

export const SearchButton = styled.button`
  position: relative;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 10px;
  margin-top: 5px;
  cursor: pointer;
  background-color: #daa520;
  padding: 2px;
  border: solid #daa520;
`;

export const SearchWrapper = styled.form`
  display: inline;
`;