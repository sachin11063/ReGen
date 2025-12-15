
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
        <div className="col-8 offset-2 text-center">
          <div className="social-icon">
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} /> YouTube
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faXTwitter} /> Twitter
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </a>
            <a href="https://www.linkedin.com/in/sachinkumar72/">
              <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
            </a>
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
        <p>Copyright 2025</p>
      </div>
      <div className='col-2 footer-item'>
        <p>Cookies setting</p>
      </div>
      <div className='col-2 footer-item'>
        <p>Term & Conditions</p>
      </div>
      <div className='col-2 footer-item'>
        <p>Privacy Policy</p>
      </div>
      <div className='col-2 footer-item'>
        <p>Modern Style</p>
      </div>
    </div>








   </div>
      

    
  )
}
export default Footer;