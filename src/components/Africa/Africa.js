import "./Africa.scss";
import AfricaImage from "../../assets/images/africa-map.gif";
import { Link } from "react-router-dom";
import MoroccoFlag from '../../assets/images/morocco.jpg';
import EgyptFlag from '../../assets/images/Flag_of_Egypt.svg.png';
import SouthAfricaFlag from '../../assets/images/Flag-South-Africa.webp';
import KenyaFlag from '../../assets/images/Flag-Kenya.webp';

export const AfricaComponent = () => {
  return (
    <>
      <div className="africa">
        <div className="africa__container">
          <h1 className="africa__header">Africa</h1>
          <Link to="/">
            <button className="africa__button">Home</button>
          </Link>
          <Link to="/Morocco"><img className="africa__flag" src={MoroccoFlag} alt="Moroccan flag" /></Link>
          <Link to="/Egypt"><img className="africa__flag" src={EgyptFlag} alt="Egyptian flag" /></Link>
          <Link to="/SouthAfrica"><img className="africa__flag" src={SouthAfricaFlag} alt="South African flag" /></Link>
          <Link to="/Kenya"><img className="africa__flag" src={KenyaFlag} alt="Kenyan flag" /></Link>
        </div>

        <img src={AfricaImage} alt="map of Africa" />
      </div>
    </>
  );
};
