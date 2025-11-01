import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <a className="navbar-brand web-logo" href="/">
          <img src="src/assets/webIcon.jpg" alt="logo" className="icon-image" />
        </a>

        <ul className="navbar-menu">
          <li><a href="/ecal" className="nav-link">Calculator</a></li>
          <li><a href="/result" className="nav-link">Neutralizer</a></li>
          <li><a href="/pathway" className="nav-link">My Investment</a></li>
          <li><a href="/about" className="nav-link">About Us</a></li>
          <li><a href="/login" className="nav-link">Log in</a></li>
          <li><a href="#" className="nav-icon"><FontAwesomeIcon icon={faBell} /></a>. </li>
          <li><a href="#" className="nav-icon"><FontAwesomeIcon icon={faEnvelope} />. </a></li>
        </ul>

        <a href="/signup" className="signup-btn">Sign up</a>
      </div>
    </nav>
  );
};

export default Navbar;
