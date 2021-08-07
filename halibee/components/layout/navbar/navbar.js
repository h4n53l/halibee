import { useRef, useState } from "react";
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
} from "./navbarStyle";

const Navbar = () => {
  const [input, setInput] = useState("");
  const [barOpened, setBarOpened] = useState(false);
  const inputFocus = useRef();
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
<NavMenu>
        <NavbarDropdown>
          <ProfileIcon />
          <NavbarDropdownContent>
            <NavLink href="/login">Register</NavLink>
            <NavLink href="/login">Login</NavLink>
          </NavbarDropdownContent>
        </NavbarDropdown>
          
        <NavLink href="/">
          <MessageIcon />
        </NavLink>
      </NavMenu>
      </NavItems>
    </Nav>
  );
};

export default Navbar;
