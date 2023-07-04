import "../Css/Contuct.css";

function Contuct() {
  return (
    <div className="contuct-container">
      <div className="contact-inner-div">
        <div className="contuct-image">
          <img
            className="my-contuct-img"
            src="../../src/assets/image/contu img.png"
            alt=""
          />
        </div>
        <div className="contuct-form">
          <div className="inner-contuct-form">
            <div className="contuct-header">
              Connect With Your Next Great Hire Today!
            </div>
            <div className="form-contuct">
              <div className="single-input">
                <label className="label-design">Company</label>
                <input className='input-design' type="text" />
              </div>
              <div className="single-input">
                <label className="label-design">Your Name</label>
                <input className='input-design' type="text" />
              </div>
              <div className="single-input">
                <label className="label-design">Phone Number</label>
                <input className='input-design' type="number" />
              </div>
              <div className="single-input">
                <label className="label-design">Email</label>
                <input className='input-design' type="email" />
              </div>
              <div className="single-input">
                <label className="label-design">Project Detail</label>
                <input className='input-design' type="text-area" />
              </div>

            </div>
            <div className="contuct-btn">
                <div className="contuct-check">
                  <input checked type="checkbox" /> By sending this form I confirm that I have read and accept the Privacy Policy
                </div>
                <button className="btn-cont">GET CONSULTATION</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contuct;
