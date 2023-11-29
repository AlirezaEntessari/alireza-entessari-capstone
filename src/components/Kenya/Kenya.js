import { useEffect } from "react";
import "./Kenya.scss";
import axios from "axios";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const Kenya = () => {
  const [videoId, setVideoId] = useState("0isi9hZnYpY");

  return (
    <>
      <div className="kenya">
        <YouTube videoId={videoId} />
        <Link to="/">
            <button className="kenya__button">Home</button>
          </Link>
          <Link to="/Africa">
            <button className="kenya__button--back">Back</button>
          </Link>
          <Link
          to="https://wikitravel.org/en/Kenya"
          target="_blank"
          rel="noopener noreferrer"
          className="kenya__link"
        >
          Additional Kenya Travel Information
        </Link>
      </div>
    </>
  );
};

export default Kenya;
