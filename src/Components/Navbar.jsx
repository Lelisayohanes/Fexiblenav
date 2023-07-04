import "../Css/Navbar.css";

const Navbar = () => {

  return(
    <div className="navbar-container">
      <div>
        <div className="navbody">
          <div className="logo">
            <img className="logo-image" src="../../src/assets/image/logo 1.png" alt="ww" />
          </div>
          <div className="Navbar">
            <ul className="lists">
              <li className="link">How to start</li>
              <li className="link">Services</li>
              <li className="link">Technologies</li>
              <li className="link">Careers</li>
            </ul>
          </div>
          <div className="contuct-us">
            <ul className="lists contuct">
              <li>
                <button className="Button">BUILD A TEAM</button>
              </li>
              <li className="link">Contact us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};


export default Navbar;
