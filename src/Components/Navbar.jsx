import "../Css/Navbar.css";
import closeMenuIcon from "../../src/assets/image/close_FILL0_wght400_GRAD0_opsz48.png";
import openMenuIcon from "../../src/assets/image/menu_FILL0_wght400_GRAD0_opsz48.png";
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check window size on initial load
    checkWindowSize();

    // Add event listener to check window size on resize
    window.addEventListener('resize', checkWindowSize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuVisibility(!isMobileMenuVisible);
  };

  return (
    <div className="navbar-container">
      <div className="navbody">
        <div className={`logo ${isMobile ? 'show' : 'hide'}`}>
          <img className="logo-image" src="../../src/assets/image/logo 1.png" alt="ww" />
        </div>
        <div className="menu-toggle">
          {isMobile && (
            <button className={`menu-toggle-button ${isMobileMenuVisible ? 'hide' : 'show'}`} onClick={toggleMobileMenu}>
              {isMobileMenuVisible ? (
                <img src={closeMenuIcon} alt="Close Menu" />
              ) : (
                <img src={openMenuIcon} alt="Open Menu" />
              )}
            </button>
          )}
          {isMobileMenuVisible && (
            <ul className={`lists ${isMobile ? 'show' : ''}`}>
              <li className="link">How to start</li>
              <li className="link">Services</li>
              <li className="link">Technologies</li>
              <li className="link">Careers</li>
            </ul>
          )}
        </div>
        <div className={`contuct-us ${isMobile ? 'show' : 'hide'}`}>
          <ul className="lists contuct">
            <li>
              <button className="Button">BUILD A TEAM</button>
            </li>
            <li className="link">Contact us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
