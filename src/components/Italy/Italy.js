import { useEffect } from "react";
import "./Italy.scss";
import axios from "axios";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const Italy = () => {
  const [videoId, setVideoId] = useState("zS4AP0Q8L8g");

  return (
    <>
      <div className="italy">
        <YouTube videoId={videoId} />
        <Link to="/">
            <button className="italy__button">Home</button>
          </Link>
          <Link to="/Europe">
            <button className="italy__button--back">Back</button>
          </Link>
          <Link
          to="https://wikitravel.org/en/Italy"
          target="_blank"
          rel="noopener noreferrer"
          className="italy__link"
        >
          Additional Italy Travel Information
        </Link>
      </div>
    </>
  );
};

export default Italy;
