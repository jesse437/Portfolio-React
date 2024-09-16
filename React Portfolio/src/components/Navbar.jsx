import { useState } from "react";

const Navbar = () => {
  return (
    <header style={styles.headerStyle} className="header">
      <nav style={styles.navbarStyle}>
        <h1 style={styles.headerStyle}>Jesus Ruiz</h1>

        <button onClick={propd.clickHandler} className="navbar">
          <ul>
            <li>
              <a href="/">About Me</a>
            </li>
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Resume</a>
            </li>
          </ul>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
