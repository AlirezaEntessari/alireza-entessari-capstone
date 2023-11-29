import { useEffect } from "react";
import "./India.scss";
import axios from "axios";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const India = () => {
  const [videoId, setVideoId] = useState("KuJwC9gTYhw");

  return (
    <>
      <div className="india">
        <YouTube videoId={videoId} />
        <Link to="/">
          <button className="india__button">Home</button>
        </Link>
        <Link to="/Asia">
          <button className="india__button--back">Back</button>
        </Link>
        <Link
          to="https://wikitravel.org/en/India"
          target="_blank"
          rel="noopener noreferrer"
          className="india__link"
        >
          Additional India Travel Information
        </Link>
      </div>
    </>
  );
};

export default India;
