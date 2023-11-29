import { useEffect } from "react";
import "./UnitedKingdom.scss";
import axios from "axios";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const UnitedKingdom = () => {
  const [videoId, setVideoId] = useState("i_XpQLYV5Zg");

  return (
    <>
      <div className="united-kingdom">
        <YouTube videoId={videoId} />
        <Link to="/">
            <button className="united-kingdom__button">Home</button>
          </Link>
          <Link to="/Europe">
            <button className="united-kingdom__button--back">Back</button>
          </Link>
          <Link
          to="https://wikitravel.org/en/United_Kingdom"
          target="_blank"
          rel="noopener noreferrer"
          className="united-kingdom__link"
        >
          Additional UK Travel Information
        </Link>
      </div>
    </>
  );
};

export default UnitedKingdom;
