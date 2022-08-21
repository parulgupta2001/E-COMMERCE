import "./login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/index";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export function Login() {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [detail, setDetail] = useState({ email: "", password: "" });

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, detail);
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({ type: "TOKEN", payload: response.data.encodedToken });

      localStorage.setItem("user", response.data.foundUser);
      authDispatch({ type: "USER", payload: response.data.foundUser });
      toast.success("Login Successful");
      let from = location.state?.from?.pathname || "/product";
      navigate(from, { replace: true });
    } catch (error) {
      authDispatch({
        type: "ERROR",
        payload: error,
      });
      toast.error("Please enter correct credentials");
    }
  };

  return (
    <div className="authorization-page">
      <form
        className=" authorization-container login-container"
        onSubmit={loginHandler}
      >
        <h2>Login</h2>
        <div className="input email-label">
          <div>
            <label htmlFor="name" className="input-email-label">
              Email
            </label>
          </div>
          <div>
            <input
              type="email"
              value={detail.email}
              required
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
              type="password"
              value={detail.password}
              required
              className="password-input user-input"
              onChange={(e) =>
                setDetail({ ...detail, password: e.target.value })
              }
            />
            <div> Forgot Password?</div>
          </div>
        </div>
        <div className="submit-buttons">
          <button className="actual-btn authorization-page-btn" type="submit">
            LOGIN
          </button>
          <button
            className="testing-btn authorization-page-btn"
            onClick={() => {
              setDetail({
                ...detail,
                email: "parulgupta@gmail.com",
                password: "parul123",
              });
            }}
          >
            Login As Guest
          </button>
        </div>
        <div className="option">
          <div>--------------------OR-----------------------</div>
          <div className="already-user-or-not">
            Need an account?
            <Link to="/signup" className="other-option-link">
              Signup
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
