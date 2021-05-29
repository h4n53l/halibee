import React, {useState, useEffect} from 'react'
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavScrollLinks,
  Logo,
  SearchBar,
  SearchWrapper,
  SearchButton
} from './NavbarElements'
import { FaBars, FaSearch} from 'react-icons/fa'
import { IconContext } from 'react-icons';
import {animateScroll as scroll} from 'react-scroll'
import logo from '../../assets/images/halibee_logo.png'


const Navbar = (props) => {
  const [scrollNav, setScrollNav] = useState(false)


  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } 
    else{
      setScrollNav(false)
    };
  };

  const toggleHome = () => {
    scroll.scrollToTop()
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to='/' onClick={toggleHome}><Logo src={logo}/>HaliBee</NavLogo>
          <SearchWrapper>
          <SearchBar type="text" placeholder="Search..." />

          <SearchButton type='submit' >
            <FaSearch/>
          </SearchButton>
          
          </SearchWrapper>
          <MobileIcon onClick={props.toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='categories'>Categories</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='dashboard'>Dashboard</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='register'>Register</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='login'>Login</NavLinks>
            </NavItem>
            <NavItem>
              <NavScrollLinks to='halibee-invitation'
              smooth={true} duration={500} spy={true} exact='true'
              offset={-80}>
                Become a Halibee
                </NavScrollLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;