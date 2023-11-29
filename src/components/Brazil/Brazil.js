import { useEffect } from "react";
import "./Brazil.scss";
import axios from "axios";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const Brazil = () => {
  const [videoId, setVideoId] = useState("GGPgvq06y40");

  return (
    <>
      <div className="brazil">
        <YouTube videoId={videoId} />
        <Link to="/">
          <button className="brazil__button">Home</button>
        </Link>
        <Link to="/SouthAmerica">
          <button className="brazil__button--back">Back</button>
        </Link>
        <Link
          to="https://wikitravel.org/en/Brazil"
          target="_blank"
          rel="noopener noreferrer"
          className="brazil__link"
        >
          Additional Brazil Travel Information
        </Link>
      </div>
    </>
  );
};

export default Brazil;
