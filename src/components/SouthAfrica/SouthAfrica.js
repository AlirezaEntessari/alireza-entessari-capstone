import { useEffect } from "react";
import "./SouthAfrica.scss";
import axios from "axios";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const SouthAfrica = () => {
  const [videoId, setVideoId] = useState("hlE-gwpXvDw");

  return (
    <>
      <div className="south-africa">
        <YouTube videoId={videoId} />
        <Link to="/">
            <button className="south-africa__button">Home</button>
          </Link>
          <Link to="/Africa">
            <button className="south-africa__button--back">Back</button>
          </Link>
          <Link
          to="https://wikitravel.org/en/South_Africa"
          target="_blank"
          rel="noopener noreferrer"
          className="south-africa__link"
        >
          Additional South Africa Travel Information
        </Link>
      </div>
    </>
  );
};

export default SouthAfrica;
