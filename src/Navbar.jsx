import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-container">
      <div class="container-fluid">
        <div>
          <a class="navbar-brand web-logo" href="/">
            <img src="src/assets/webIcon.jpg" className="icon-image"></img>
          </a>
        </div>

        <div className="button-element">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link navbar-button" href="/ecal">
                  Projects
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link navbar-button" href="/result">
                  My Investments
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link navbar-button" href="/pathway">
                  Admin
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link navbar-button" href="/about">
                  About Us
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link navbar-button" href="/login">
                  Log in
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link navbar-button" href="#">
                  <FontAwesomeIcon icon={faBell} />
                </a>
              </li>

              <li class="nav-item"></li>
            </ul>

            <a class="nav-link navbar-button navbar-button-icon" href="/signup">
              <button type="button" class="btn btn-dark">
                Sign up
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
