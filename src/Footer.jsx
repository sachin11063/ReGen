
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn, faTwitter, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import {  faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css";
const Footer=()=>
{
  return(
   <div className="container footer-container p-5 mt-5">
    <div className="row">
      <div className="col-2 offset-1 footer-item">
        <h1 className='mt-2'><img src="src/assets/webIcon.jpg" className='icon-image-footer'></img></h1>
      </div>


      <div className="col-2 offset-1 footer-item">
        <h4 className='mb-4'>Quick Links</h4>
        <p>Home</p>
        <p>About us</p>
        <p>Features</p>
        <p>Sustainability Reports</p>
      </div>
      <div className="col-2 footer-item">
      <h4 className='mb-4'>Policy Links</h4>
      <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Cookie Policy</p>
        <p>Disclaimer</p>
      </div>
      <div className="col-2 footer-item">
      <h4 className='mb-4'>Resources </h4>
      <p>Initiatives</p>
        <p>Guidelines</p>
        <p>Support</p>
        <p>Help</p>
      </div>
    </div>

    <div className="row mt-5">
      <div className="col-4 offset-3 footer-item">
        <p></p>
      </div>
      <div className="col-2 offset-1">
        <div className='social-icon'>
        <a class="nav-link navbar-button" href="#"><FontAwesomeIcon icon={faYoutube} /></a>
      <a class="nav-link navbar-button" href="#"> <FontAwesomeIcon icon={faXTwitter} /> </a>
      <a class="nav-link navbar-button" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
      <a class="nav-link navbar-button" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
      <a class="nav-link navbar-button" href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='col-10 offset-1   Footer-Horizontal-line'>
        <hr></hr>
      </div>
    </div>

    <div className='row'>
      <div className='col-2 offset-1 footer-item'>
        <p>@2024Pride</p>

      </div>
      <div className='col-2 footer-item'>
        <p>Cookies setting</p>
      </div>
      <div className='col-2 footer-item'>
        <p>Term and Conditions</p>
      </div>
      <div className='col-2 footer-item'>
        <p>Privacy Policy</p>
      </div>
      <div className='col-2 footer-item'>
        <p>Modern Slavery Statement</p>
      </div>
    </div>








   </div>
      

    
  )
}
export default Footer;