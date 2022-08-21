import "./signup.css";
import { useAuth } from "../../contexts/index";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate, useLocation } from "react-router-dom";

export function Signup() {
  const { authState, authDispatch } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [detail, setDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [dummy, setDummy] = useState(false);

  async function signupHandler(e) {
    e.preventDefault();
    try {
      let response;
      dummy
        ? (response = await axios.post("/api/auth/login", detail))
        : (response = await axios.post("/api/auth/signup", detail));
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({ type: "TOKEN", payload: response.data.encodedToken });

      localStorage.setItem("user", response.data.createdUser);
      authDispatch({ type: "USER", payload: response.data.createdUser });
      toast.success("Signup Successful");
      let from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (error) {
      authDispatch({
        type: "ERROR",
        payload: error,
      });
      toast.error("Error occurred, please try again");
    }
  }

  return (
    <div className="authorization-page">
      <form
        onSubmit={signupHandler}
        className=" signup-container authorization-container"
      >
        <h2>Create Account</h2>
        <div className="input-name-label">
          <div>
            <label className="first-name-label first-name">First name</label>
            <input
              required
              type="text"
              value={detail.firstName}
              className="name-input first-name"
              onChange={(e) =>
                setDetail({ ...detail, firstName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="last-name-label last-name">Last name</label>
            <input
              required
              type="text"
              value={detail.lastName}
              className="name-input last-name"
              onChange={(e) =>
                setDetail({ ...detail, lastName: e.target.value })
              }
            />
          </div>
        </div>
        <div className="input email-label">
          <div>
            <label htmlFor="name" className="input-email-label">
              Email
            </label>
          </div>
          <div>
            <input
              required
              type="email"
              value={detail.email}
              className="email-input user-input"
              onChange={(e) => setDetail({ ...detail, email: e.target.value })}
            />
          </div>
        </div>
        <div className="input password-label">
          <div>
            <label htmlFor="password" className="input-password-label">
              Password
            </label>
          </div>
          <div>
            <input
              required
              type="password"
              value={detail.password}
              className="password-input user-input"
              onChange={(e) =>
                setDetail({ ...detail, password: e.target.value })
              }
            />
          </div>
        </div>

        <div className="submit-buttons">
          <button className="actual-btn authorization-page-btn" type="submit">
            Create New Account
          </button>
          <button
            className="testing-btn authorization-page-btn"
            onClick={() => {
              {
                setDummy(true);

                setDetail({
                  ...detail,
                  firstName: "Parul",
                  lastName: "Gupta",
                  email: "parulgupta@gmail.com",
                  password: "parul123",
                });
              }
            }}
          >
            Dummy Signup
          </button>
        </div>
        <div className="option">
          <div>----------------------OR----------------------</div>
          <div className="already-user-or-not">
            Already an account?
            <Link to="/login" className="other-option-link">
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
