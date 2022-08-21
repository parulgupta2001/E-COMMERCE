import "./profile.css";
import { MdLocationOn } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { Outlet, Link, useLocation } from "react-router-dom";

export function Profile() {
  const { pathname } = useLocation();
  return (
    <div className="profile-container">
      <div className="profile-content">
        <Link
          to="/profile"
          className={pathname === "/profile" ? "info" : "address"}
        >
          <FaUserAlt />
          Profile
        </Link>
        <Link
          to="/profile/address"
          className={pathname === "/profile/address" ? "info" : "address"}
        >
          <MdLocationOn />
          Addresses
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
