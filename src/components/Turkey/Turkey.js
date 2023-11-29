import { useEffect } from "react";
import "./Turkey.scss";
import axios from "axios";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const Turkey = () => {
  const [videoId, setVideoId] = useState("e9mtvvJM0yg");

  return (
    <>
      <div className="turkey">
        <YouTube videoId={videoId} />
        <Link to="/">
            <button className="turkey__button">Home</button>
          </Link>
          <Link to="/Asia">
            <button className="turkey__button--back">Back</button>
          </Link>
          <Link
          to="https://wikitravel.org/en/T%C3%BCrkiye"
          target="_blank"
          rel="noopener noreferrer"
          className="turkey__link"
        >
          Additional Turkey Travel Information
        </Link>
      </div>
    </>
  );
};

export default Turkey;
