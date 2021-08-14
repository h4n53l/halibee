import { useRef, useState } from "react";
import { Auth } from "aws-amplify";
import {
  NavMenu,
  NavLink,
  Nav,
  NavLogo,
  SearchBox,
  SearchInput,
  SearchButton,
  SearchIcon,
  ProfileIcon,
  MessageIcon,
  NavItems,
  NavbarDropdown,
  NavbarDropdownContent,
  NavButton,
} from "./navbarStyle";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState("");
  const [input, setInput] = useState("");
  const [barOpened, setBarOpened] = useState(false);
  const inputFocus = useRef();

  const signOut = async () => {
    try {
      await Auth.signOut();
      setLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  const CheckLoggedInState = () => {
    Auth.currentAuthenticatedUser()
      .then(() => {
        setLoggedIn(true);
        console.log(Auth.currentAuthenticatedUser())
      })
      .catch(() => {
        setLoggedIn(false);
      });
  };
  
  CheckLoggedInState();

  return (
    <Nav>
      <NavLogo href="/">
        HaLi<span>Bee</span>
      </NavLogo>

      <NavItems>
        <SearchBox
          barOpened={barOpened}
          onClick={() => {
            setBarOpened(true);
            inputFocus.current.focus();
          }}
          onFocus={() => {
            setBarOpened(true);
            inputFocus.current.focus();
          }}
          onBlur={() => {
            setBarOpened(false);
          }}
        >
          <SearchInput
            onChange={(e) => setInput(e.target.value)}
            ref={inputFocus}
            value={input}
            barOpened={barOpened}
            placeholder="Search..."
          />
          <SearchButton type="submit" barOpened={barOpened}>
            <SearchIcon />
          </SearchButton>
        </SearchBox>
        {loggedIn ? (<NavMenu>
          <NavbarDropdown>
            <ProfileIcon />
            <NavbarDropdownContent>
            
                <NavButton onClick={signOut}>Sign Out</NavButton>
              
            </NavbarDropdownContent>
          </NavbarDropdown>
            <NavLink href="/">
              <MessageIcon />
            </NavLink>
          </NavMenu>) :
          <NavbarDropdown>
          <ProfileIcon />
          <NavbarDropdownContent>
              <NavLink href="/login">Login</NavLink>
          </NavbarDropdownContent>
        </NavbarDropdown>
          }
      </NavItems>
    </Nav>
  );
};

export default Navbar;
