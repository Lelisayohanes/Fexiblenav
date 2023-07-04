import "../Css/Home.css";
export default function Home() {
  return (
    <div className="home">
      <div className="hero-container">
        <div className="hero-msg">
          <div className="hero-h2">
            Building dev team, Quickly and Affordably
          </div>

          <div className="hero-p">
            We specialize in helping you build a team of expert developers,
            testers, and leaders. We are setup to deliver long term solutions,
            or scale to different needs quickly.
          </div>

          <div>
            <button className="hero-btn">Build a team</button>
          </div>
        </div>

        <div className="hero-image">
          <img
            className="image1"
            src="../../src/assets/image/Rectangle26.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
