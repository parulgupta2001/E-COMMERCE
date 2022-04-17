import "./signup.css";
import "../../../App.css";
import { useAuth } from "../../contexts/index";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export function Signup() {
  const { authState, authDispatch } = useAuth();
  const { user } = authState;
  const navigate = useNavigate();

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      });
      // saving the encodedToken in the localStorage
      console.log(response.data.encodedToken);
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({ type: "TOKEN", payload: response.data.encodedToken });
      navigate("/product");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={signupHandler} className="signup-container">
      <h3>SIGN-UP</h3>
      <div className="input-name-label">
        <div>
          <label className="first-name-label first-name">First name</label>
          <input
            type="text"
            className="name-input first-name"
            onChange={(e) =>
              authDispatch({
                type: "FIRST_NAME",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label className="last-name-label last-name">Last name</label>
          <input
            type="text"
            className="name-input last-name"
            onChange={(e) =>
              authDispatch({ type: "LAST_NAME", payload: e.target.value })
            }
          />
        </div>
      </div>
      <div className="input email-label">
        <div>
          <label className="input-email-label">Email</label>
        </div>
        <div>
          <input
            type="email"
            className="email-input user-input"
            onChange={(e) =>
              authDispatch({ type: "EMAIL", payload: e.target.value })
            }
          />
        </div>
      </div>
      <div className="input password-label">
        <div>
          <label className="input-password-label">Password</label>
        </div>
        <div>
          <input
            type="password"
            className="password-input user-input"
            onChange={(e) =>
              authDispatch({ type: "PASSWORD", payload: e.target.value })
            }
          />
        </div>
      </div>
      <div className="input password-label">
        <div>
          <label className="conform-password-label">Confirm Password</label>
        </div>
        <div>
          <input
            type="password"
            className="password-input user-input"
            onChange={(e) =>
              authDispatch({
                type: "CONFIRM_PASSWORD",
                payload: e.target.value,
              })
            }
          />
        </div>
      </div>
      <button className="sign-up-btn" type="submit">
        SIGN-UP
      </button>
      <div className="option">
        <div>----------------------------OR-------------------------------</div>
        <div className="already-user">
          Already a user? <Link to="/login">LOGIN</Link>
        </div>
      </div>
    </form>
  );
}
