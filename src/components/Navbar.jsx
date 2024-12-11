import { Link } from "react-router-dom";

export const Navbar = function () {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/contact">
        <div>Contact</div>
      </Link>
      <Link to="/services">
        <div>Services</div>
      </Link>
    </div>
  );
}
