import bgImage from "../../../assets/solarPhoto.jpg";
import top10 from "../../../assets/top-10.png";
import quotes from "../../../assets/circle.png";
import "./landingpagephone.css";

export function LandingPagePhone() {
  return (
    <div className="landing-page-phone-main-container">
      <div className="landing-page-opening-container">
        <img src={bgImage} className="landing-page-phone-bg-image" />
        <div className="vignette-overlay"></div>
        <div className="landing-page-phone-quote-container">
          <h1 className="f3-5 m0">
            Exclusive <span className="orangeText">Solar </span> Appointments
          </h1>
        </div>

        <div className="landing-page-phone-quote-container">
          <h4 className="f1-5 m0">
            Let us fill your sales pipeline with already interested homeowner's
            waiting to buy solar
          </h4>
        </div>

        <div className="landing-page-phone-quote-container">
          <button className="m0 landing-page-phone-button">
            Book a Strategy Call
          </button>
        </div>

        <div className="landing-page-top-award-container">
          <h4 className="font1 top-award-text">
            Our closing percentage went from 6% to over 40% thanks to Solar Lead
            Company Appointments"
          </h4>
          <img src={top10} className="top-award-image" />
          <img src={quotes} className="quotes-image" />
        </div>
      </div>

      <div className="landing-page-3D-container"></div>
    </div>
  );
}
