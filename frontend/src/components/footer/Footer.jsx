import React from 'react'
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
   <footer>
   <div className="footer-content">
    <p>
        &copy; 2024 Your E-Learning Platform. All rights reserved. <br />
        Made with ❤️ <a href="">Maneesh Rawat</a>
    </p> 
    <div className="social-links">
        <a href=""><FaFacebook/></a>
        <a href=""><FaInstagram/></a>
        <a href=""><FaLinkedin/></a>
    </div>

    </div></footer>
  )
}

export default Footer
