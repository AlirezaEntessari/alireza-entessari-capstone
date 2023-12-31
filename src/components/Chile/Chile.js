import { useEffect } from "react";
import "./Chile.scss";
import axios from "axios";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const Chile = () => {
  const [videoId, setVideoId] = useState("4M9UgOPcen8");

  return (
    <>
      <div className="chile">
        <YouTube videoId={videoId} />
        <Link to="/">
            <button className="chile__button">Home</button>
          </Link>
          <Link to="/SouthAmerica">
            <button className="chile__button--back">Back</button>
          </Link>
          <Link
          to="https://wikitravel.org/en/Chile"
          target="_blank"
          rel="noopener noreferrer"
          className="chile__link"
        >
          Additional Chile Travel Information
        </Link>
      </div>
    </>
  );
};

export default Chile;
