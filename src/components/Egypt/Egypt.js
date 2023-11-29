import { useEffect } from "react";
import "./Egypt.scss";
import axios from "axios";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const Egypt = () => {
  const [videoId, setVideoId] = useState("46aHh-aVRCA");

  return (
    <>
      <div className="egypt">
        <YouTube videoId={videoId} />
        <Link to="/">
            <button className="egypt__button">Home</button>
          </Link>
          <Link to="/Africa">
            <button className="egypt__button--back">Back</button>
          </Link>
          <Link
          to="https://wikitravel.org/en/Egypt"
          target="_blank"
          rel="noopener noreferrer"
          className="egypt__link"
        >
          Additional Egypt Travel Information
        </Link>
      </div>
    </>
  );
};

export default Egypt;
