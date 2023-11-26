import "./Asia.scss";
import AsiaImage from "../../assets/images/asia-map.gif";
import { Link } from "react-router-dom";
import ChinaFlag from '../../assets/images/ChineseFlag.png';
import JapaneseFlag from '../../assets/images/Flag_of_Japan.svg (1).png';
import TurkeyFlag from '../../assets/images/Flag_of_Turkey.svg.png';
import IndiaFlag from '../../assets/images/Flag_of_India.svg (1).png';

export const AsiaComponent = () => {
  return (
    <>
      <div className="asia">
        <div className="asia__container">
          <h1 className="asia__header">Asia</h1>
          <Link to="/">
            <button className="asia__button">Home</button>
          </Link>
          <Link to="/China"><img className="asia__flag" src={ChinaFlag} alt="Chinese flag" /></Link>
          <Link to="/Japan"><img className="asia__flag" src={JapaneseFlag} alt="Japanese flag" /></Link>
          <Link to="/Turkey"><img className="asia__flag" src={TurkeyFlag} alt="Turkish flag" /></Link>
          <Link to="/India"><img className="asia__flag" src={IndiaFlag} alt="Indian flag" /></Link>
        </div>
        <img src={AsiaImage} alt="map of Asia" />
      </div>
    </>
  );
};
