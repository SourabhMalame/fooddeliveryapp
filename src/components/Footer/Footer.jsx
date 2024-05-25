import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            tenetur molestiae quae veritatis fugiat quisquam nulla laborum,
            consequatur atque suscipit accusantium beatae. Ratione corporis
            earum odio perspiciatis quas laboriosam inventore!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+123840923804</li>
            <li>tomamo@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        copyright 2024 @ Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
