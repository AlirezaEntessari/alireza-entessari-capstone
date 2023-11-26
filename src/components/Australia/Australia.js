import "./Australia.scss";
import { Link } from "react-router-dom";
import AustralianImage from '../../assets/images/australia-map.gif';
import AustralianFlag from '../../assets/images/Flag-Australia (1).webp';
import NewZealandFlag from '../../assets/images/Flag_of_New_Zealand.svg.webp';

export const AustraliaComponent = () => {
  return (
    <>
      <div className="australia">
        <div className="australia__container">
          <h1 className="australia__header">Australia</h1>
          <Link to="/">
            <button className="australia__button">Home</button>
          </Link>
          <Link to="/AustraliaCountry"><img className="australia__flag" src={AustralianFlag} alt="Australian flag" /></Link>
          <Link to="/NewZealand"><img className="australia__flag" src={NewZealandFlag} alt="New Zealand flag" /></Link>
        </div>
        <img src={AustralianImage} alt="map of Australia" />
      </div>
    </>
  );
};
