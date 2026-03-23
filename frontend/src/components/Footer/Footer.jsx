import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
 
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Nosh brings your favorite meals from the best local restaurants
            straight to your doorstep. Our mission is to make food ordering
            simple, fast, and enjoyable. Explore a variety of delicious dishes
            and experience the joy of great food delivered fresh anytime you
            crave it.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-213-432-123</li>
            <li>nosh@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© 2026 Nosh. All Rights Reserved.</p>
    </div>
  );
}

export default Footer
