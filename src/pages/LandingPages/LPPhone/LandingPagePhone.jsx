import bgImage from "../../../assets/solarPhoto.jpg";
import "./landingpagephone.css";

export function LandingPagePhone() {
  return (
    <div className="landing-page-phone-main-container">
      <img src={bgImage} className="landing-page-phone-bg-image" />
      <div className="landing-page-phone-main-quote-container">
        <h1>
          Exclusive <span>Solar</span> Appointments
        </h1>
      </div>
    </div>
  );
}
