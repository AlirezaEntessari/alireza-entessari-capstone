import "./Europe.scss";
import EuropeImage from "../../assets/images/europe-map.gif";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import SpainFlag from '../../assets/images/Flag_of_Spain.svg.png';
import UKFlag from '../../assets/images/Flag_of_Great_Britain_(1707–1800).svg.png';
import FranceFlag from '../../assets/images/Flag_of_France.svg.webp';
import ItalianFlag from '../../assets/images/Flag_of_Italy_(Pantone,_2006).svg.png';

export const EuropeComponent = () => {


  return (
    <>
      <div className="europe">
        <div className="europe__container">
          <h1>Europe</h1>
          <Link to="/">
            <button className="europe__button">Home</button>
          </Link>
          <Link to="/Spain"><img className="europe__flag" src={SpainFlag} alt="Spanish flag" /></Link>
          <Link to="/UnitedKingdom"><img className="europe__flag" src={UKFlag} alt="United Kingdom Flag" /></Link>
          <Link to="/France"><img className="europe__flag" src={FranceFlag} alt="French flag" /></Link>
          <Link to="/Italy"><img className="europe__flag" src={ItalianFlag} alt="Italian flag" /></Link>
        </div>

        <img src={EuropeImage} alt="map of Europe" />
      </div>
    </>
  );
};
