import { useEffect } from "react";
import "./AustralianCountry.scss";
import axios from "axios";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const AustralianCountry = () => {
  const [videoId, setVideoId] = useState("Gyn2ZTR2kV0");

  return (
    <>
      <div className="australian-country">
        <YouTube videoId={videoId} />
        <Link to="/">
            <button className="australian-country__button">Home</button>
          </Link>
          <Link to="/Australia">
            <button className="australian-country__button--back">Back</button>
          </Link>
      </div>
    </>
  );
};

export default AustralianCountry;
