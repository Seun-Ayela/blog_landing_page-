import React from "react";
// import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container flex">
            <h1>Panama Blog</h1>
            <h1>Powered by Holberton .TECH Domain Railways</h1>
          </div>

        <div className="footer-icons">
          {/* <BsTwitter /> */}
          {/* <SiLinkedin /> */}
          <a href="https://www.linkedin.com/in/oluwaseun-ayela"> <SiLinkedin /></a>
          {/* <BsYoutube />
          <FaFacebookF /> */}
    
        </div>
        <div className="footer-icons">
          {/* <a href="https://github.com/Seun-Ayela"><BsGithub /> Github Repository</a> */}
          <a href="https://github.com/Seun-Ayela/panama_blog.git"><BsGithub /> Github Repository</a>
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <BsYoutube />
          <FaFacebookF />
        </div>
        
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        
        <div className="footer-section-columns">
          <span>+2347054786511</span>
          <span>panamablog@gmail.com</span>
          <span>panama@blog.com</span>
          <span>contact@panama.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
      <h3 className="reserved">All rights reserved &copy; June 2023</h3>
    </div>
  );
};

export default Footer;
