import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/index";
import axios from "axios";

export function Login() {
  const { authState, authDispatch } = useAuth();
  const { user, error } = authState;
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: user.email,
        password: user.password,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({ type: "TOKEN", payload: response.data.encodedToken });
      navigate("/product");
    } catch (error) {
      authDispatch({
        type: "ERROR",
        payload: "Wrong credentials, please try again",
      });
      console.log(error);
    }
  };

  setTimeout(() => {
    if (error)
      authDispatch({
        type: "ERROR",
        payload: null,
      });
  }, 3000);

  return (
    <div className="login">
      <form className="login-container" onSubmit={loginHandler}>
        <h3>LOGIN</h3>
        <div className="input email-label">
          <div>
            <label htmlFor="name" className="input-email-label">
              Email
            </label>
          </div>
          <div>
            <input
              type="email"
              required
              class="email-input user-input"
              onChange={(e) =>
                authDispatch({ type: "EMAIL", payload: e.target.value })
              }
            />
          </div>
        </div>
        <div class="input password-label">
          <div>
            <label htmlFor="password" className="input-password-label">
              Password
            </label>
          </div>
          <div>
            <input
              type="password"
              required
              className="password-input user-input"
              onChange={(e) =>
                authDispatch({ type: "PASSWORD", payload: e.value.target })
              }
            />
            <div> Forgot Password?</div>
          </div>
        </div>
        <button className="login-btn" type="submit">
          LOGIN
        </button>
        <div className="option">
          <div>------------------------OR---------------------------</div>
          <div className="need-account">
            Need an account?<Link to="/signup"> SIGN-UP</Link>
          </div>
        </div>
      </form>
      <div className="error-msg">{error}</div>
    </div>
  );
}
