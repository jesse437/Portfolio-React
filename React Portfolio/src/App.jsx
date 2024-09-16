import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Resume from "./components/pages/Resume.jsx";
import Portfolio from "./components/pages/Portfolio.jsx";
import Contact from "./components/pages/Contact.jsx";
import AboutMe from "./components/pages/AboutMe.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
