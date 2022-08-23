import "./page-not-found.css";
import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <div className="page-not-found-container">
      <img src="http://res.cloudinary.com/dwhran9qg/image/upload/Image/Oops_404_Error_with_a_broken_robot-amico_cwha98.svg" />
      <Link to="/">
        <h3>Go to Home</h3>
      </Link>
    </div>
  );
}
