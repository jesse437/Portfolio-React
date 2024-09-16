// src/components/Footer.js
import React from "react";
// import "../styles/Footer.css"; // Optional if you want to style it separately

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li>
          <a href="/github">Github</a>
        </li>
        <li>
          <a href="/email">Email</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
