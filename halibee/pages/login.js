import { useState } from "react";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import { HiIdentification, HiMail, HiOutlineKey } from "react-icons/hi";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loggedIn, setLoggedIn] = useState(null);
  const [newUser, setNewUser] = useState(null);
  const router = useRouter();

  const signIn = async (event) => {
    event.preventDefault();
    try {
      const user = await Auth.signIn(email, password);
      setLoggedIn(user);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  if (loggedIn) {
    router.push("/");
  }

  return (
    <div className="columns just-center ml-2 interval-1 mt-5">
      <div className="column size-4">
        <div className="card outset-neomo">
          <header className="card-header">
            {newUser ? (
              <p className="card-header-title text-center text-color font-size-4">
                Sign Up
              </p>
            ) : (
              <p className="card-header-title text-center text-color font-size-4">
                Sign In
              </p>
            )}
          </header>
          <div className="card-content">
            {newUser && (
              <div className="input-group outset-neomo width-full">
                <span className="input-group-left text-center text-color">
                  <HiIdentification />
                </span>
                <input
                  type="text"
                  className="input-group-right outset-neomo width-full"
                  placeholder="Your User Name"
                  value={username}
                  onChange={(valueEntered) =>
                    setUsername(valueEntered.target.value)
                  }
                />
              </div>
            )}

            <div className="input-group mt-2 outset-neomo width-full">
              <span className="input-group-left text-center text-color">
                <HiMail />
              </span>
              <input
                type="email"
                className="input-group-right outset-neomo width-full"
                placeholder="Your Email"
                value={email}
                onChange={(valueEntered) => setEmail(valueEntered.target.value)}
              />
            </div>

            <div className="input-group mt-2 outset-neomo width-full">
              <span className="input-group-left text-center text-color">
                <HiOutlineKey />
              </span>
              <input
                type="password"
                className="input-group-right outset-neomo width-full"
                placeholder="Password"
                value={password}
                onChange={(valueEntered) =>
                  setPassword(valueEntered.target.value)
                }
              />
            </div>

            {newUser ? (
              <>
              <div className="input-group mt-2 outset-neomo width-full">
                <span className="input-group-left text-center text-color">
                  <HiOutlineKey />
                </span>
                <input
                  type="password"
                  className="input-group-right outset-neomo width-full"
                  placeholder="Confirm Password"
                  value={password}
                  onChange={(valueEntered) =>
                    setPassword(valueEntered.target.value)
                  }
                />
              </div>
              <div className="mt-2">
              <button
                onClick={signIn}
                className="
                    button
                    mt-2
                    mb-2
                    font-weight-2
                    outset-neomo
                    width-full
                    text-color
                    font-size-6
                    sign-button
                  "
              >
                Sign Up
              </button>
              <div className="text-center">or</div>
            </div>
            </>
            )
          :
          
            (<>
              <div className="mt-2">
              <button
                onClick={signIn}
                className="
                    button
                    mt-2
                    mb-2
                    font-weight-2
                    outset-neomo
                    width-full
                    text-color
                    font-size-6
                    sign-button
                  "
              >
                Sign In
              </button>
              <div className="text-center">or</div>
            </div>
          </>)}
            <div className="mt-1 text-column">
              {newUser ? (
                <button
                  onClick={() => setNewUser(false)}
                  className="
                    button
                    mt-2
                    mb-2
                    font-weight-2
                    outset-neomo
                    width-full
                    text-color
                    font-size-6
                    sign-button
                  "
                >
                  Already have an account
                </button>
              ) : (
                <button
                  onClick={() => setNewUser(true)}
                  className="
                    button
                    mt-2
                    mb-2
                    font-weight-2
                    outset-neomo
                    width-full
                    text-color
                    font-size-6
                    sign-button
                  "
                >
                  Create an account
                </button>
              )}
              {!newUser && (
                <div>
                  <hr className="navbar-divider" />
                  <a href="#" className="sign-link--black ">
                    Forgot password?
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
