import { FaUserAlt } from "react-icons/fa";
import { useAuth } from "../../contexts/index";
import "./user-info.css";

export function UserInfo() {
  const { authState } = useAuth();
  const { user } = authState;

  console.log(user);

  return (
    <div className="user-info-container">
      <div className="user-info-content">
        <FaUserAlt className="user-info-icon" />
        <p>First Name: {user?.firstName}</p>
        <p>Last Name: {user?.lastName}</p>
        <p>Email: {user?.email}</p>
      </div>
    </div>
  );
}
