import { useEffect } from "react";
import "./Jamaica.scss";
import axios from "axios";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const Jamaica = () => {
  const [videoId, setVideoId] = useState("ZHxFOGplBZc");

  return (
    <>
      <div className="jamaica">
        <YouTube videoId={videoId} />
        <Link to="/">
            <button className="jamaica__button">Home</button>
          </Link>
          <Link to="/NorthAmerica">
            <button className="jamaica__button--back">Back</button>
          </Link>
          <Link
          to="https://wikitravel.org/en/Jamaica"
          target="_blank"
          rel="noopener noreferrer"
          className="jamaica__link"
        >
          Additional Jamaica Travel Information
        </Link>
      </div>
    </>
  );
};

export default Jamaica;
