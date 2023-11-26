import "./NorthAmerica.scss";
import NorthAmericaImage from "../../assets/images/map-north-america.jpg";
import { Link } from "react-router-dom";
import USAFlag from '../../assets/images/1200px-Flag_of_the_United_States.svg.webp';
import CanadaFlag from '../../assets/images/Flag_of_Canada.svg.png';
import MexicoFlag from '../../assets/images/Flag-Mexico (1).webp';
import JamaicaFlag from '../../assets/images/Flag_of_Jamaica.svg';

export const NorthAmericaComponent = () => {
  return (
    <>
      <div className="north-america">
        <div className="north-america__container">
          <h1 className="north-america__header">North America</h1>
          <Link to="/">
            <button className="north-america__button">Home</button>
          </Link>
          <Link to="/USA"><img className="north-america__flag" src={USAFlag} alt="USA flag" /></Link>
          <Link to="/Canada"><img className="north-america__flag" src={CanadaFlag} alt="Canada flag" /></Link>
          <Link to="/Mexico"><img className="north-america__flag" src={MexicoFlag} alt="Mexico flag" /></Link>
          <Link to="/Jamaica"><img className="north-america__flag" src={JamaicaFlag} alt="Jamaican flag" /></Link>
        </div>
        <img className="north-america__image" src={NorthAmericaImage} alt="map of North America" />
      </div>
    </>
  );
};
