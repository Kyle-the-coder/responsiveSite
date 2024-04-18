import bgImage from "../../../assets/solarPhoto.jpg";
import "./landingpagephone.css";

export function LandingPagePhone() {
  return (
    <div className="landing-page-phone-main-container">
      <img src={bgImage} className="landing-page-phone-bg-image" />
      <div className="vignette-overlay"></div>
      <div className="landing-page-phone-quote-container">
        <h1 className="f2-5">
          Exclusive <span className="orangeText">Solar </span> Appointments
        </h1>
      </div>

      <div className="landing-page-phone-quote-container">
        <h4>
          Let us fill your sales pipeline with already interested homeowner's
          waiting to buy solar
        </h4>
      </div>

      <div className="landing-page-phone-quote-container">
        <button className="landing-page-phone-button">
          Book a Strategy Call
        </button>
      </div>
    </div>
  );
}
