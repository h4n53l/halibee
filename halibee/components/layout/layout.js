import { Auth } from "aws-amplify";
import { useState } from "react";
import { HiUser } from "react-icons/hi";
import { FaSmileBeam } from "react-icons/fa";
import { Button, Div, Link } from "../tags";

const Layout = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

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
      })
      .catch(() => {
        setLoggedIn(false);
      });
  };

  CheckLoggedInState();

  return (
    <Div className="neomo">
      <nav className="nav header">
        <Div className="header-logo">
          <Link href="/">
            <img
              src="https://via.placeholder.com/150/0000FF/FFFFFF/?text=HaLiBee"
              className="header-logo--main"
              alt="Logo"
            />
          </Link>
        </Div>
        <Div className="header-nav">

          <Div className="dropdown horizontal-margin">
            <Button
              className="
              outset-neomo
              content-text
              font-weight-2
              header-dropdown
            "
            >
              <HiUser className="input-group-left text-center text-color" />
              &nbsp; Account
            </Button>
            <Div className="dropdown-content text-center">
              {loggedIn ? (
                <Div>
                  <Link className="info"> Notifications </Link>
                  <Link className="info"> Dashboard </Link>
                  <Link className="info"> Profile </Link>
                  <Link className="info"> Settings </Link>
                  <hr className="navbar-divider" />
                  <Button
                      className="outset-neomo danger font-weight-2"
                      onClick={signOut}
                    >Logout</Button>
                </Div>
              ) : (
                <Link href="/login" className="info">
                  {" "}
                  Login{" "}
                </Link>
              )}
            </Div>
          </Div>

          <Div className="dropdown horizontal-margin">
            <Button
              className="
              outset-neomo
              content-text
              font-weight-2
              header-dropdown
            "
            >
              <FaSmileBeam className="input-group-left text-center text-color" />
              &nbsp; Meet Us
            </Button>
            <Div className="dropdown-content text-center">
              <Link className="info"> Who we are </Link>
              <hr className="navbar-divider" />
              <Link className="info" href='/contactUs'> Contact Us </Link>
            </Div>
          </Div>
        </Div>
      </nav>

      {children}

      <footer className="pt-10 pb-10">
      <Div className="container text-center pt-2 pb-2">
        <span>Copyright &copy; HaLiBee 2021</span>
      </Div>
    </footer>
    </Div>
  );
};

export default Layout;
