import { useEffect } from "react";
import "./Mexico.scss";
import axios from "axios";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const Mexico = () => {
  const [videoId, setVideoId] = useState("VFQ7ZixOdXw");

  return (
    <>
      <div className="mexico">
        <YouTube videoId={videoId} />
        <Link to="/">
            <button className="mexico__button">Home</button>
          </Link>
          <Link to="/NorthAmerica">
            <button className="mexico__button--back">Back</button>
          </Link>
          <Link
          to="https://wikitravel.org/en/Mexico"
          target="_blank"
          rel="noopener noreferrer"
          className="mexico__link"
        >
          Additional Mexico Travel Information
        </Link>
      </div>
    </>
  );
};

export default Mexico;
