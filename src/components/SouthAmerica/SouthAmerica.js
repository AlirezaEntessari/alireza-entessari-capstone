import "./SouthAmerica.scss";
import SouthAmericaImage from "../../assets/images/mapsouthamerica.gif";
import { Link } from "react-router-dom";
import BrazilFlag from '../../assets/images/800px-Flag_of_Brazil.svg.png';
import ArgentinaFlag from '../../assets/images/flag-Argentina-2010 (1).webp';
import ColombiaFlag from '../../assets/images/Flag_of_Colombia.svg.png';
import ChileFlag from '../../assets/images/Flag_of_Chile.svg.png';

export const SouthAmericaComponent = () => {
  return (
    <>
      <div className="south-america">
        <div className="south-america__container">
          <h1 className="south-america__header">South America</h1>
          <Link to="/">
            <button className="south-america__button">Home</button>
          </Link>
          <Link to="/Brazil"><img className="south-america__flag" src={BrazilFlag} alt="Brazil flag" /></Link>
          <Link to="/Argentina"><img className="south-america__flag" src={ArgentinaFlag} alt="Argentina flag" /></Link>
          <Link to="/Colombia"><img className="south-america__flag" src={ColombiaFlag} alt="Colombia flag" /></Link>
          <Link to="/Chile"><img className="south-america__flag" src={ChileFlag} alt="Chile flag" /></Link>
        </div>

        <img src={SouthAmericaImage} alt="map of South America" />
      </div>
    </>
  );
};
