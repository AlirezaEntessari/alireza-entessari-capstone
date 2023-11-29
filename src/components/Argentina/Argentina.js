import { useEffect } from "react";
import "./Argentina.scss";
import axios from "axios";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const Argentina = () => {
  const [videoId, setVideoId] = useState("k9pWRHzdttI");

  return (
    <>
      <div className="argentina">
        <YouTube videoId={videoId} />
        <Link to="/">
          <button className="argentina__button">Home</button>
        </Link>
        <Link to="/SouthAmerica">
          <button className="argentina__button--back">Back</button>
        </Link>
        <Link
          to="https://wikitravel.org/en/Argentina"
          target="_blank"
          rel="noopener noreferrer"
          className="argentina__link"
        >
          Additional Argentina Travel Information
        </Link>
      </div>
    </>
  );
};

export default Argentina;
