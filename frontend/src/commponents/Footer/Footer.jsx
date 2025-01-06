import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo_humus}></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, eligendi aperiam culpa quae id esse repellat velit
            blanditiis! Voluptatibus quas enim magni non, aspernatur consectetur
            aliquid aliquam praesentium reiciendis aut!
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
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+972-52-345-6789</li>
            <li>contact_humus_avinu@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 Ⓒ humus_avinu.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
