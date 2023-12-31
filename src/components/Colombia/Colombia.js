import { useEffect } from "react";
import "./Colombia.scss";
import axios from "axios";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const Colombia = () => {
  const [videoId, setVideoId] = useState("-9cSHMgVxsU");

  return (
    <>
      <div className="colombia">
        <YouTube videoId={videoId} />
        <Link to="/">
            <button className="colombia__button">Home</button>
          </Link>
          <Link to="/SouthAmerica">
            <button className="colombia__button--back">Back</button>
          </Link>
          <Link
          to="https://wikitravel.org/en/Colombia"
          target="_blank"
          rel="noopener noreferrer"
          className="colombia__link"
        >
          Additional Colombia Travel Information
        </Link>
      </div>
    </>
  );
};

export default Colombia;
