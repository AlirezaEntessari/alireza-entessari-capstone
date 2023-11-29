import { useEffect } from "react";
import "./Spain.scss";
import axios from "axios";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const Spain = () => {
  const [videoId, setVideoId] = useState("myoNlbXG2RI");

  return (
    <>
      <div className="spain">
        <YouTube videoId={videoId} />
        <Link to="/">
          <button className="spain__button">Home</button>
        </Link>
        <Link to="/Europe">
          <button className="spain__button--back">Back</button>
        </Link>
        <Link
          to="https://wikitravel.org/en/Spain"
          target="_blank"
          rel="noopener noreferrer"
          className="spain__link"
        >
          Additional Spain Travel Information
        </Link>
      </div>
    </>
  );
};

export default Spain;
