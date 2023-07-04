import "../Css/Footer.css";
export default function Footer() {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-part">
          <div className="columns">
            <div className="comp-logo">
              <img src="../../src/assets/image/logo 1.png" alt="" />
            </div>
            <div className="footer-p">
              Expertly trained, battle-tested, elite software developers on
              demand
            </div>
            <div className="footer-contuct">
              <div className="each-contuct">
                <div className="footer-phone">
                  <div className="contuct-icon"><span className="material-symbols-outlined">phone_enabled</span></div>
                  <div className="contuct-text">+251-924-651-797</div>
                </div>
              </div>
              <div className="each-contuct">
                <div className="footer-email">
                  <div className="contuct-icon"><span className="material-symbols-outlined">mail</span></div>
                  <div className="contuct-text">yohaneslelisa@gmail.com</div>
                </div>
              </div>
              <div className="each-contuct">
                
              </div>
            </div>
            <div className="social-media">
              <div className="follow-us"> Follow us</div>
              <div className="social-row">
                <div className="social-icon"><img src="../../src/assets/image/Facebook.png" alt=" " /></div>
                <div className="social-icon"><img src="../../src/assets/image/Twitter.png" alt=" " /></div>
                <div className="social-icon"><img src="../../src/assets/image/Instagram.png" alt=" " /></div>
                <div className="social-icon"><img src="../../src/assets/image/LinkedIn.png" alt=" " /></div>
              </div>

            </div>

          </div>
          <div className="columns">
            <div className="column-header">
                Company
            </div>
            <div className="column-content">
                <ul className="link-list">
                    <li>About us</li>
                    <li>Success story</li>
                    <li>Privacy Plocy</li>
                    <li>Terms & Conditions</li>
                    <li>Contuct us</li>
                </ul>
            </div>
          </div>
          <div className="columns">
          <div className="column-header">
                Services
            </div>
            <div className="column-content">
            <ul className="link-list">
                    <li>Hire Permanent Staff</li>
                    <li>Staff Augmentation</li>
                    <li>Software Outsourcing</li>
                    <li>Build Remote Office</li>
                </ul>
            </div>
          </div>
          <div className="columns">
          <div className="column-header">
                How to Start
            </div>
            <div className="column-content">
                <ul className="link-list">
                    <li>You Asked</li>
                    <li>We Proceed</li>
                    <li>Negotaite</li>
                    <li>You Get</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right-part">© 2022 Lelisa</div>
    </div>
  );
}
