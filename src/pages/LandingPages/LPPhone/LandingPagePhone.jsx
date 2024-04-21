import bgImage from "../../../assets/solarPhoto.jpg";
import top10 from "../../../assets/top-10.png";
import "./landingpagephone.css";

export function LandingPagePhone() {
  return (
    <div className="landing-page-phone-main-container">
      <div className="landing-page-opening-container">
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

        <div className="landing-page-top-award-container">
          <h4>
            "Our closing percentage went from 6% to over 40% thanks to Solar
            Lead Company Appointments"
          </h4>
        </div>
      </div>

      <div className="landing-page-3D-container">
        <spline-viewer
          loading-anim-type="spinner-small-dark"
          url="https://prod.spline.design/w042fzE4JUnZRDlq/scene.splinecode"
        ></spline-viewer>
      </div>
    </div>
  );
}
